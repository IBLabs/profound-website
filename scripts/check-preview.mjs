// Exercise the same Origin-bearing script requests used by mobile Safari.
const base = new URL(process.argv[2] ?? "http://localhost:3000");
const headers = { "ngrok-skip-browser-warning": "true" };
const assets = new Set();

for (const path of ["/", "/studio", "/portfolio", "/team"]) {
  const response = await fetch(new URL(path, base), { headers });
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  const html = await response.text();
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)]
    .map(match => new URL(match[1].replaceAll("&amp;", "&"), base))
    .filter(url => url.origin === base.origin && url.pathname.startsWith("/_next/"));
  if (!scripts.length) throw new Error(`${path}: no application scripts found`);
  scripts.forEach(url => assets.add(url.href));
}

for (const url of assets) {
  const response = await fetch(url, {
    headers: { ...headers, Origin: base.origin, "Sec-Fetch-Mode": "cors", "Sec-Fetch-Dest": "script" },
  });
  const type = response.headers.get("content-type") ?? "";
  await response.body?.cancel();
  if (!response.ok || !/javascript/.test(type)) {
    throw new Error(`${new URL(url).pathname}: HTTP ${response.status}, ${type}`);
  }
}
console.log(`Verified 4 pages and ${assets.size} Origin-bearing JavaScript requests.`);
