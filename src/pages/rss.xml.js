import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = getCollection('posts');
  return rss({
    title: 'RSS | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/"${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
    site: 'https://astro-tutorial-jet.vercel.app/',
  });
}