// db/sample-data.ts
const sampleData = {
  sampleLinks: [
    {
      shortUrl: "jsloop1",
      longUrl: "https://google.com/search?q=js+event+loop",
      clicks: 10,
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      lastUsed: new Date(Date.now() - 5 * 60 * 1000),
    },
    {
      shortUrl: "yt12345",
      longUrl: "https://youtube.com",
      clicks: 3,
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      lastUsed: new Date(Date.now() - 60 * 60 * 1000),
    },
    {
      shortUrl: "insta12",
      longUrl: "https://instagram.com",
      clicks: 25,
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      lastUsed: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
    {
      shortUrl: "docs789",
      longUrl: "https://vercel.com/docs",
      clicks: 0,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      lastUsed: null,
    },
    {
      shortUrl: "node456",
      longUrl: "https://nodejs.org/en/docs",
      clicks: 14,
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      lastUsed: new Date(Date.now() - 30 * 60 * 1000),
    },
  ],
};

export default sampleData;
