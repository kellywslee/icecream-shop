import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getCart,
  addOrUpdateCart as addOrUpdateCartApi,
  removeFromCart as removeFromCartApi,
} from "../services/apiCart";
import { toast } from "react-hot-toast";

export function useCart(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", userId || ""],
    queryFn: () => getCart(userId),
    enabled: !!userId,
    onError: (err) => toast.error(err.message),
  });
  return { items: data, isLoading, error };
}

export function useAddOrUpdateCart() {
  const queryClient = useQueryClient();
  const {
    mutate: addOrUpdateCart,
    isLoading,
    error,
  } = useMutation({
    mutationFn: addOrUpdateCartApi,
    onSuccess: (userId) => {
      queryClient.invalidateQueries(["cart", userId]);
      toast.success("Item added to the cart!");
    },
    onError: (err) => toast.error(err.message),
  });
  return { addOrUpdateCart, isLoading, error };
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();
  const {
    mutate: removeFromCart,
    isLoading,
    error,
  } = useMutation({
    mutationFn: removeFromCartApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      toast.success("Item removed from the cart!");
    },
    onError: (err) => toast.error(err.message),
  });
  return { removeFromCart, isLoading, error };
}
