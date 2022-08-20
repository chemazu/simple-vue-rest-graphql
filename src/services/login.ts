import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export const login = async (user: { email: string; password: string }) => {
  try {
    await axios
      .post("/account/login", user)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  } catch (error) {
    console.log(error);
  }
};
