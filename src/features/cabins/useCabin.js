import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabin";

export function useCabin() {
  const {
    isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return {
    isLoading,
    data,
    error,
  };
}
