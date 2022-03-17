import axios from "axios";

export async function getLanguagesCode() {
  const access_token =
    "9e522ad481d49a67ba237d3445b5eea849576a83e8ab46f9911f30406c42f810";
  const LANGUAGES_API_URL = `https://sandbox-api.cityfalcon.com/v0.2/languages?access_token=${access_token}`;
  const response = await axios.get(LANGUAGES_API_URL);
  return response;
}
