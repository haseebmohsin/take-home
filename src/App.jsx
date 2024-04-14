import { useEffect, useState } from "react";
import { getNewsFromApi, getGuardianNews, getNYTNews } from "./api";
import InputField from "./components/UI/InputField";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Checkbox from "./components/UI/Checkbox";
import PrimaryButton from "./components/UI/PrimaryButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsApi, setShowNewsApi] = useState(true);
  const [showGuardian, setShowGuardian] = useState(true);
  const [showNewYorkTimes, setShowNewYorkTimes] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [newsApiData, setNewsApiData] = useState([]);
  const [guardianData, setGuardianData] = useState([]);
  const [newYorkTimesData, setNewYorkTimesData] = useState([]);

  const fetchNews = async () => {
    setIsLoading(true);

    const newsApi = await getNewsFromApi();
    const guardianNews = await getGuardianNews();
    const nytNews = await getNYTNews(searchTerm);

    setNewsApiData(newsApi);
    setGuardianData(guardianNews);
    setNewYorkTimesData(nytNews);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleCheckboxChange = (setter) => {
    return () => {
      setter((prev) => !prev);
    };
  };

  const handleSearch = () => {
    fetchNews();
  };

  return (
    <>
      <Header />

      <div className="pt-24 px-12 max-w-6xl mx-auto bg-gray-50 min-h-[calc(100vh-4rem)] mb-24">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end p-1">
          <div className="md:flex gap-4 pb-1">
            <Checkbox
              label="The New York Times"
              checked={showNewYorkTimes}
              onChange={handleCheckboxChange(setShowNewYorkTimes)}
            />
            <Checkbox
              label="News Api"
              checked={showNewsApi}
              onChange={handleCheckboxChange(setShowNewsApi)}
            />
            <Checkbox
              label="The Guardian"
              checked={showGuardian}
              onChange={handleCheckboxChange(setShowGuardian)}
            />
          </div>

          <div className="flex gap-2 justify-end items-center lg:mt-0 mt-3">
            <InputField
              className="md:min-w-[350px]"
              type="text"
              id="search"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />

            <PrimaryButton className="h-10" secondary onClick={handleSearch}>
              Search
            </PrimaryButton>
          </div>
        </div>

        {isLoading && <div>Loading News...</div>}

        <div className="p-1">
          {showNewYorkTimes &&
            newYorkTimesData.map((item, index) => (
              <Articles
                key={index}
                source="The New York Times"
                date={item.pub_date?.substring(0, 10)}
                time={item.pub_date?.substring(11, 16)}
                title={item.snippet}
              />
            ))}

          {showNewsApi &&
            newsApiData.map((item, index) => (
              <Articles
                key={index}
                source="News Api"
                date={item.publishedAt?.substring(0, 10)}
                time={item.publishedAt?.substring(11, 16)}
                title={item.title}
                description={item.description}
              />
            ))}

          {showGuardian &&
            guardianData.map((item, index) => (
              <Articles
                key={index}
                source="The Guardian"
                date={item.webPublicationDate?.substring(0, 10)}
                time={item.webPublicationDate?.substring(11, 16)}
                title={item.webTitle}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
