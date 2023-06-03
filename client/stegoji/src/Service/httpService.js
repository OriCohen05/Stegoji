import axios from "axios";

const BASE_URL = "http://localhost:8080/";

const service = {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
};
export default service;

async function ajax(endpoint, method = "get", data = null) {
  try {
    let headers = {};
    if (typeof data === "string") {
      data = JSON.parse(data);
      if (data.token) {
        headers = {
          "x-access-token": data.token,
          "Content-Type": "application/json",
        };
        console.warn(`${method} of endpoint /${endpoint} uses the token!`);
      }
    }

    const params = {
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      headers: headers, // Add headers to the request
    };

    console.log(params);
    const res = await axios(params);
    return res.data;
  } catch (err) {
    console.error(err);
    console.error(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}, status: ${err.statusCode}`
    );
    throw err;
  }
}
