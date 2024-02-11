import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  login as loginApi,
  logout as logoutApi,
  signup as signupApi,
  getCurrentUser,
} from "../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      queryClient.invalidateQueries(["user"]);
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

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"], {
        refetchActive: true,
        refetchInactive: true,
      });
      toast.success("Logout successful!");
      navigate("/", { replace: true });
    },
  });

  return { logout, isLoading };
}

export function useSignup() {
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

export function useCurrentUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoadingUser: isLoading, user };
}
