import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success("signup was succesfully"), console.log(user);
    },
  });
  return { mutate, isLoading };
}
