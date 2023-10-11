import { instance } from "./axios";

export const usesSevice = () => {
  return instance.get("/crud-api/products");
};
