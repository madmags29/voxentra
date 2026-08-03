import 'dotenv/config';
async function run() {
  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent("sales person calling center headset")}&image_type=photo&orientation=horizontal&safesearch=true&per_page=5`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.hits && data.hits.length > 2) {
    console.log("Alternative 1: " + data.hits[1].webformatURL);
    console.log("Alternative 2: " + data.hits[2].webformatURL);
    console.log("Alternative 3: " + data.hits[3].webformatURL);
  }
}
run();
