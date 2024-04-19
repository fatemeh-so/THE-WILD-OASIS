import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate=useNavigate()
    const queryClient=useQueryClient()
  const {mutate,isLoading}= useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      toast.success("login was succesfully");
      console.log(data);
      navigate("/")
      queryClient.setQueryData(["user"],data.user)
    },
    onError:(err)=>toast.error(err.message)
  });
  return{mutate,isLoading}
}
