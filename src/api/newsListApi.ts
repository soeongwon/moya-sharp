import api from "./Api";

export type NewsType = {
  additionalData: {};
  assetTags: [];
  category: string;
  cityfalconScore: Number;
  cityfalcon_permalink: string;
  description: string;
  duplicatesCount: Number;
  imageUrls: [];
  lang: string;
  paywall: boolean;
  publishTime: string;
  registrationRequired: boolean;
  searchTags: [];
  source: {};
  title: string;
  url: string;
  uuid: string;
};

export type SearchType = {
  orderBy: string;
  keyType: string;
  paramValue: string;
  language: string;
  timeFilter: string;
  mediaType: string;
  exchange?: string;
  [propsName: string]: any;
};

export async function getNewList(searchPayload: SearchType) {
  const NEWS_API_URL = "/search";
  var params = new URLSearchParams();

  for (let key in searchPayload) {
    params.append(key, searchPayload[key]);
  }

  const response = await api.get(NEWS_API_URL, { params });

  console.log("search api response", response);
  return response;
}
