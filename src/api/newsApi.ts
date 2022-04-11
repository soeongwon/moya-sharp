import api from "./Api";

//sector, category, startup api 호출

const SEARCH_API_URL = "/search";

async function fetchNews(
  keyType: string,
  paramValue: string,
  nextToken?: string
) {
  if (nextToken) {
    const response = await api.get(
      `${SEARCH_API_URL}/${keyType}/${paramValue}?nextPageToken=${nextToken}`
    );
    return response.data;
  }
  const response = await api.get(`${SEARCH_API_URL}/${keyType}/${paramValue}`);
  return response.data;
}

export { fetchNews };
