import axios from "axios";

const Api = async (form) => {
  const URL = axios.create({
    baseURL: "https://aspire-kappa.vercel.app",
  });
  try {
    const { data } = await URL.post(`/cn/addEnquire`, form);
    alert("Thanks for contacting us! We will be in touch with you shortly.");
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export default Api;
