import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export default function useCurrentUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoadingUser: isLoading, user };
}
