import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export const register = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post("/api/account/register", user);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};
