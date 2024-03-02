import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabin";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading } = useMutation({
    mutationFn: ({ newCabinData, id }) => createCabins(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCabin, isLoading };
}

