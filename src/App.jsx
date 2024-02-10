import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/Navbar";
import CustomToaster from "./components/Toaster";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      <Navbar />
      <Outlet />
      <CustomToaster />
    </QueryClientProvider>
  );
}

export default App;
