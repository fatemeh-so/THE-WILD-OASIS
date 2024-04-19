import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate=useNavigate()
  const {isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
        toast.success(" booking Successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      navigate("/bookings");
    },
    onError:(err)=>{
        toast.error(err.message)
    }
  });
  return{mutate,isLoading}
}
