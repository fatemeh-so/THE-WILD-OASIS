import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabin";

export function useCabin() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return {
    isLoading,
    data: cabins,
    error,
  };
}
