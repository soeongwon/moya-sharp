import api from "./Api";
import axios from "axios";

export type KeywordType = {
  termType: string;
  typeId: string;
}

// export async function GetAllMyKewords() {
//   const seeAllKeywords = "preferTerms/reports"
//   const response = await api.get(seeAllKeywords)

//   return response.data
// }

type keywordID = Pick<KeywordType, "typeId">
type keywordTerm = Pick<KeywordType, "termType">

const Keyword = "/preferTerms/create"

export async function addMyKeword(term_type: keywordTerm, type_id: keywordID) {
  const response = await axios.post(Keyword)

  console.log(response.data)
  return response.data
}



// export async function GetMyKeword(term_type: string, type_id: string) {
//   const response = await api.get(`${Keyword}/${term_type}/${type_id}`)

//   return response.data
// }

// export async function deleteMyKeyword(term_type: string, type_id: string) {
//   const response = await api.delete(`${Keyword}/${term_type}/${type_id}`)

//   console.log(response)
//   return response.data
// }