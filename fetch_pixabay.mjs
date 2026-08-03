import 'dotenv/config';

async function run() {
  const q = "call center customer service";
  const res = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(q)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`);
  const data = await res.json();
  data.hits.forEach((h, i) => console.log(`Image ${i}: ${h.webformatURL}`));
}
run();
