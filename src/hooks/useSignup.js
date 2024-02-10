import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../services/apiAuth";
import { toast } from "react-hot-toast";

export default function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      toast.success("Account successfully created!");
      navigate("/", { replace: true });
    },

    onError: (err) => toast.error(err.message),
  });

  return { signup, isLoading, error };
}
