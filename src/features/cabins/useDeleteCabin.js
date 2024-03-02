import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin } from "../../services/apiCabin";

export function useDeleteCabin() {
    const queryClient = useQueryClient();
    const { isLoading, mutate } = useMutation({
      mutationFn: deleteCabin,
      onSuccess: () => {
        toast.success(" cabin Successfully deleted!");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { isLoading, mutate };
}
