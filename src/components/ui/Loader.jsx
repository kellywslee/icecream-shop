import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <Hearts
      color="#fef08a"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    />
  );
};

export default Loader;
