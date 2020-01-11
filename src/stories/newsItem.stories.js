import React from 'react';
import NewsItem from '../components/news/newsItem';
import { storiesOf } from '@storybook/react';

const item = {
  "source": {
    "id": "wired",
    "name": "Wired"
  },
  "author": "Will Knight",
  "title": "Export Controls Threaten the Future of AI Outposts in China",
  "description": "As restrictions intensify, it will become more difficult for American companies to maintain labs in the talent-rich country.",
  "url": "https://www.wired.com/story/export-controls-threaten-ai-outposts-china/",
  "urlToImage": "https://media.wired.com/photos/5e177e6287b5f30008dd4e8e/191:100/w_1280,c_limit/Business-AI-US-China-1169747427.jpg",
  "publishedAt": "2020-01-10T13:00:00Z",
  "content": "For some time, American companies including Microsoft, Google, and IBM have established research labs in China to tap into local AI talent and to keep track of technological trends. Now, as tensions and restrictions continue to ramp up, some observers wonder … [+4470 chars]"
}
export default {
  title: 'news item',
};

storiesOf('NewsItem', module)
  .add('NewsItem', () => <NewsItem item={item} />);

