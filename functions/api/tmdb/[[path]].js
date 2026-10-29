export async function onRequest(context) {
  const { request, env, params } = context;
  if (!env.TMDB_API_KEY) {
    return new Response(JSON.stringify({ error: "TMDB_API_KEY is not configured." }), {
      status: 503,
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
    });
  }

  const segments = Array.isArray(params.path) ? params.path : [params.path].filter(Boolean);
  const apiPath = segments.map(part => encodeURIComponent(part)).join("/");
  const incoming = new URL(request.url);
  const target = new URL(`https://api.themoviedb.org/3/${apiPath}`);
  incoming.searchParams.forEach((value, key) => target.searchParams.set(key, value));
  target.searchParams.set("api_key", env.TMDB_API_KEY);

  const upstream = await fetch(target.toString(), {
    method: "GET",
    headers: { "accept": "application/json" }
  });

  const headers = new Headers(upstream.headers);
  headers.set("access-control-allow-origin", "*");
  headers.set("cache-control", "public, max-age=300, s-maxage=900");
  headers.set("content-type", "application/json; charset=utf-8");
  return new Response(upstream.body, { status: upstream.status, headers });
}
