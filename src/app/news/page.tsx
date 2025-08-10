import Parser from "rss-parser";

type FeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  contentSnippet?: string;
};

async function fetchFashionNews(): Promise<FeedItem[]> {
  const parser: Parser<FeedItem> = new Parser();
  // Using Vogue RSS as an example source; replace or add more feeds as needed
  const FEEDS = [
    "https://www.vogue.com/rss", // Vogue general feed often includes fashion news
    "https://www.harpersbazaar.com/rss/all.xml",
    "https://www.elle.com/rss/all.xml",
  ];
  const results = await Promise.allSettled(FEEDS.map((url) => parser.parseURL(url)));
  const items: FeedItem[] = [];
  for (const res of results) {
    if (res.status === "fulfilled") {
      items.push(...(res.value.items ?? []));
    }
  }
  // Basic normalization and limit
  const dedup = new Map<string, FeedItem>();
  for (const i of items) {
    const key = i.link || i.title || Math.random().toString(36);
    if (!dedup.has(key)) dedup.set(key, i);
  }
  return Array.from(dedup.values())
    .filter((i) => i && (i.title || i.contentSnippet))
    .slice(0, 20);
}

export const metadata = {
  title: "Fashion News | Harry-Store",
};

export default async function NewsPage() {
  const items = await fetchFashionNews();
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold tracking-tight">Latest Fashion News</h1>
      {items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No news available right now. Please try again later.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-lg font-semibold hover:underline"
              >
                {item.title}
              </a>
              {item.pubDate ? (
                <div className="mt-1 text-xs text-gray-500">{new Date(item.pubDate).toLocaleString()}</div>
              ) : null}
              {item.contentSnippet ? (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{item.contentSnippet}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}


