import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../services/apiAuth";
import { toast } from "react-hot-toast";

export default function useLogout() {
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
