import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  addNewIceCream as addNewIceCreamApi,
  getIceCreams,
} from "../services/apiIceCreams";
import { toast } from "react-hot-toast";

export function useAddNewIceCream() {
  const queryClient = useQueryClient();
  const {
    mutate: addNewIceCream,
    isLoading,
    error,
  } = useMutation({
    mutationFn: addNewIceCreamApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["iceCreams"]);
      toast.success("New Ice Cream added!");
    },

    onError: (err) => toast.error(err.message),
  });

  return { addNewIceCream, isLoading, error };
}

export function useIceCreams() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["iceCreams"],
    queryFn: getIceCreams,
    onError: (err) => toast.error(err.message),
  });

  return { iceCreams: data, isLoading, error };
}
