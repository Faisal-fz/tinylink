async function getLinks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/links`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch links");
  return res.json();
}

export default async function HomePage() {
  const links = await getLinks();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Your Shortened Links</h1>

      <div className="mt-4 space-y-4">
        {links.map((link: any) => (
          <div
            key={link.id}
            className="border p-4 rounded-lg flex justify-between"
          >
            <div>
              <p>
                <span className="font-semibold">Short:</span>{" "}
                http://localhost:3000/{link.shortUrl}
              </p>
              <p>
                <span className="font-semibold">Long:</span> {link.longUrl}
              </p>
            </div>

            <div className="text-right">
              <p>Clicks: {link.clicks}</p>
              <p>
                Last Used:{" "}
                {link.lastUsed
                  ? new Date(link.lastUsed).toLocaleString()
                  : "Not used"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
