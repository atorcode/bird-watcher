export const fetchData = async () => {
  const url = "https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json";
  const apiKey = process.env.API_KEY as string;

  const response = await fetch(url, {
    headers: { "x-eBirdApiToken": apiKey },
  });

  return response.json();
};
// revalidate later

const HomePage = async () => {
  const data = await fetchData();
  console.log(data);
  return <div>asdf</div>;
};

export default HomePage;
