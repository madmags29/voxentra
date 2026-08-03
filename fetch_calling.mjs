import 'dotenv/config';
async function run() {
  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent("person talking on phone headset call center")}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.hits && data.hits.length > 0) {
    console.log("Calling Image: " + data.hits[0].webformatURL);
  }
}
run();
