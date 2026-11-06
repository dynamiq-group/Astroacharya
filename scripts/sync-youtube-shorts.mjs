import { writeFile } from 'node:fs/promises';

// Refresh the checked-in snapshot before deploying to include new uploads.
// YouTube's public Shorts tab returns newest uploads first. No API key needed.
const channel = 'https://www.youtube.com/@astroacharya_001';
const response = await fetch(`${channel}/shorts`, { signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`YouTube returned ${response.status}; keeping the existing Shorts snapshot.`);
const html = await response.text();
const match = html.match(/var ytInitialData = (.*?);<\/script>/s);
if (!match) throw new Error('YouTube page format changed; keeping the existing Shorts snapshot.');
const data = JSON.parse(match[1]);
const tab = data.contents?.twoColumnBrowseResultsRenderer?.tabs?.find((item) => item.tabRenderer?.selected)?.tabRenderer;
if (!tab?.endpoint?.commandMetadata?.webCommandMetadata?.url?.endsWith('/shorts')) {
  throw new Error('Could not confirm the Shorts tab; keeping the existing snapshot.');
}
const shorts = [];
function collect(value) {
  if (!value || typeof value !== 'object') return;
  if (value.shortsLockupViewModel) {
    const short = value.shortsLockupViewModel;
    const id = short.onTap?.innertubeCommand?.reelWatchEndpoint?.videoId;
    const title = short.overlayMetadata?.primaryText?.content;
    const thumbnail = short.thumbnailViewModel?.thumbnailViewModel?.image?.sources?.[0]?.url;
    if (/^[\w-]{11}$/.test(id) && title && thumbnail?.startsWith('https://i.ytimg.com/') && !shorts.some((item) => item.id === id)) {
      shorts.push({ id, title, thumbnail });
    }
    return;
  }
  Object.values(value).forEach(collect);
}
collect(tab.content);
if (!shorts.length) throw new Error('No Shorts found; keeping the existing snapshot.');
const snapshot = { channel, updatedAt: new Date().toISOString().slice(0, 10), shorts: shorts.slice(0, 12) };
await writeFile(new URL('../src/data/youtube-shorts.json', import.meta.url), `${JSON.stringify(snapshot, null, 2)}\n`);
console.log(`Updated ${snapshot.shorts.length} Shorts in newest-first channel order. Rebuild the site to publish them.`);
