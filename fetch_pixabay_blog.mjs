import 'dotenv/config';
import fs from 'fs';

async function run() {
  const q = "call center corporate analytics";
  const res = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(q)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10`);
  const data = await res.json();
  const urls = data.hits.map(h => h.webformatURL);
  
  let content = fs.readFileSync("src/lib/data/blogPosts.ts", "utf8");
  let i = 0;
  
  content = content.replace(/keywords:\s*\[.*?\]/g, (match) => {
    const url = urls[i++ % urls.length];
    return `${match},\n    imageUrl: "${url}"`;
  });
  
  fs.writeFileSync("src/lib/data/blogPosts.ts", content);
}
run();
