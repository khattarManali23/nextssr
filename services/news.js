import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const useGetAllNews = () => {
  const { data, isError, isLoading } = useQuery(
    ["_getAllNews"],
    () => api.get("/newsmanagement/all"),
    { enabled: true }
  );
  return {
    data: data?.data?.data,
    isLoading,
    isError,
  };
};

export const useGetOneNewsById = (id) => {
  const { data, isError, isLoading } = useQuery(
    ["_getOneNewsById", id],
    () => api.get(`newsmanagement/oneBySlug/${id}`),
    { enabled: id ? true : false }
  );
  return {
    data: data?.data?.data,
    isLoading,
    isError,
  };
};
