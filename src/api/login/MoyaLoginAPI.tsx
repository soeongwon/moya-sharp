import api from "../Api";

const MoyaLoginAPI = async ({ email, password }: any) => {
  let params = new URLSearchParams();
  params.append("userId", email);
  params.append("password", password);

  const headers = {
    "Access-Control-Allow-Credentials": true
  };
  const response = await api.post("/auth/login", params, { headers });
  return response;
};

export default MoyaLoginAPI;
