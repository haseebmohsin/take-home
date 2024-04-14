import axios from "axios";

const NEWS_API_KEY = "13326b71e19d445b86cb2cdc6030f67c";
const THE_GUARDIAN_API_KEY = "7eaaecc2-df80-447d-9c13-3242b190b3fd";
const NYT_API_KEY = "GQ5NAP4sAhOpEU9yLDbyAuenLX8FQdla";

export const getNewsFromApi = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news from News API:", error);
    return [];
  }
};

export const getGuardianNews = async () => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?api-key=${THE_GUARDIAN_API_KEY}`
    );
    return response.data.response.results;
  } catch (error) {
    console.error("Error fetching news from The Guardian:", error);
    return [];
  }
};

export const getNYTNews = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${NYT_API_KEY}`
    );
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching news from The New York Times:", error);
    return [];
  }
};
