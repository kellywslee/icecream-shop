import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../services/apiAuth";
import { toast } from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Login successful!");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Email or password are incorrect");
    },
  });

  return { login, isLoading, error };
}
