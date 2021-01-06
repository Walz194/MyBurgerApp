import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-8ffda.firebaseio.com/",
});

export default instance;
