import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const useGetWhatsappLink = () => {
  const { data, isError, isLoading } = useQuery(["_getWhatsappgroup"], () =>
    api.get(`/whatsappgroup/latest`)
  );
  return {
    data: data?.data?.data,
    isLoading,
    isError,
  };
};
