import axios from "axios";
import { cameltoCababString } from "../utils";

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

type NewsListType = {
  nextPageToken: string;
  stories: NewsType[];
};

export type QuarystringType = {
  identifier_type: any;
  identifiers: string;
  time_filter: string;
  categories: string;
  min_cityfalcon_score?: Number;
  languages: string;
  order_by?: "top" | "latest" | "popular";
  access_token: string;
  nextPageToken?: string;
  limit: number;
};

export type SearchPayload = {
  searchTitle?: SearchTitleType;
  identifiers: string;
  language: string;
  timeFilter: string;
  categories: string;
  nextPageToken?: string;
  order_by?: "top" | "latest" | "popular";
};

export type SearchTitleType =
  | "Category"
  | "Sector"
  | "Startup"
  | "tikers"
  | "index"
  | "commodities"
  | "events"
  | "topics"
  | "macrotopic";

const access_token =
  "ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce775";

function serchType(type: SearchTitleType) {
  if (type === "tikers") {
    return "full_tikers";
  } else if (type === "commodities" || type === "macrotopic") {
    return "assets";
  }
}

export async function getNewList(searchPayload: SearchPayload) {
  let payload: QuarystringType = {
    identifier_type: searchPayload.searchTitle || "index",
    identifiers: searchPayload.identifiers,
    time_filter: searchPayload.timeFilter,
    categories: searchPayload.categories,
    min_cityfalcon_score: 0,
    languages: searchPayload.language,
    order_by: searchPayload.order_by || "top",
    access_token,
    nextPageToken: searchPayload.nextPageToken,
    limit: 30
  };

  //조건에 따른 다른 파라미터 넣어주는 객체들
  const sectorParams = {
    sector_categories: cameltoCababString(payload.identifiers),
    time_filter: payload.time_filter,
    categories: payload.categories,
    languages: payload.languages,
    order_by: payload.order_by,
    access_token,
    nextPageToken: payload.nextPageToken,
    limit: payload.limit
  };

  const eventsParams = {
    events: cameltoCababString(payload.identifiers),
    time_filter: payload.time_filter,
    categories: payload.categories,
    languages: payload.languages,
    order_by: payload.order_by,
    limit: payload.limit,
    access_token,
    nextPageToken: payload.nextPageToken
  };

  const params = {
    identifier_type: serchType(payload.identifier_type),
    identifiers: payload.identifiers,
    time_filter: payload.time_filter,
    categories: payload.categories,
    languages: payload.languages,
    min_cityfalcon_score: 0,
    order_by: payload.order_by,
    limit: payload.limit,
    access_token,
    nextPageToken: payload.nextPageToken
  };

  const NEWS_API_URL = "https://api.cityfalcon.com/v0.2/stories?";

  function setParams() {
    switch (searchPayload.searchTitle) {
      case "Sector":
        return sectorParams;
      case "events":
        return eventsParams;
      default:
        return params;
    }
  }
  const response = await axios.get(NEWS_API_URL, {
    params: setParams()
  });

  console.log(response);
  return response;
}
