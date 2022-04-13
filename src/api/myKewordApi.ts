import api from "./Api";

export type KeywordType = {
  data: [];
  termType: string;
  typeId: string;
}

export async function GetAllMyKewords() {
  const seeAllKeywords = "preferTerms/reports"
  const response = await api.get(seeAllKeywords)

  return response.data
}

// const Keyword = "preferTerms/"

// export async function addMyKeword(term_type: any, type_id: any) {
//  const addKeyword = "preferTerms/create"
//   const response = await api.post(addKeyword)

//   console.log(response.data)
//   return response.data
// }



// export async function GetMyKeword(term_type: string, type_id: string) {
//   const response = await api.get(`${Keyword}/${term_type}/${type_id}`)

//   return response.data
// }

// export async function deleteMyKeyword(term_type: string, type_id: string) {
//   const response = await api.delete(`${Keyword}/${term_type}/${type_id}`)

//   console.log(response)
//   return response.data
// }