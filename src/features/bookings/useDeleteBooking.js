import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("There was en error when deleting this booking");
    },
  });

  return { deleteBooking, isDeleting };
}
