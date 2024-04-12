import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputField from "./components/UI/InputField";
import axios from "axios";
import Articles from "./components/Articles";

const NEWS_API_KEY = "13326b71e19d445b86cb2cdc6030f67c";
const THE_GUARDIAN_API_KEY = "7eaaecc2-df80-447d-9c13-3242b190b3fd";
const NYT_API_KEY = "GQ5NAP4sAhOpEU9yLDbyAuenLX8FQdla";

function App() {
  const [newsApiData, setNewsApiData] = useState([]);
  const [guardianData, setGuardianData] = useState([]);
  const [newYorkTimesData, setNewYorkTimesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.articles);
        setNewsApiData(response.data.articles);
      });

    axios
      .get(
        `https://content.guardianapis.com/search?api-key=${THE_GUARDIAN_API_KEY}`
      )
      .then((response) => {
        setGuardianData(response.data.response.results);
      });

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${NYT_API_KEY}`
      )
      .then((response) => {
        setNewYorkTimesData(response.data.response.docs);
      });
  }, []);

  return (
    <div className="">
      <Header />

      <div className="pt-24 px-12 max-w-6xl mx-auto bg-gray-50 min-h-[calc(100vh-4rem)] mb-24">
        <div className="w-[40%]">
          <InputField type="text" id="search" placeholder="Search" required />
        </div>

        <div className="p-1">
          {newsApiData &&
            newsApiData.map((item) => (
              <Articles
                key={item.id}
                source="News Api"
                date={item.publishedAt?.substring(0, 10)}
                time={item.publishedAt?.substring(11, 16)}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>

        <div className="p-1">
          {guardianData &&
            guardianData.map((item) => (
              <Articles
                key={item.id}
                source="The Guardian"
                date={item.webPublicationDate?.substring(0, 10)}
                time={item.webPublicationDate?.substring(11, 16)}
                title={item.webTitle}
              />
            ))}
        </div>

        <div className="p-1">
          {newYorkTimesData &&
            newYorkTimesData.map((item) => (
              <Articles
                key={item.id}
                source="The New York Times"
                date={item.pub_date?.substring(0, 10)}
                time={item.pub_date?.substring(11, 16)}
                title={item.snippet}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
