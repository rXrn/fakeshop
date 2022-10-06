import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";

export async function fetchAllProducts() {
  axios.get(apiURL).then((response) => {
    return response;
  });
}
