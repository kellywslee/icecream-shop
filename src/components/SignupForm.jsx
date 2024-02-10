import { useForm } from "react-hook-form";
import useSignup from "../hooks/useSignup";

export default function SignupForm() {
  const { signup, isLoading, error } = useSignup();
  const {
    register,
    handleSubmit,
    reset,
    // formtate: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const { displayName, email, password } = data;
    console.log(displayName, email, password);
    signup(
      { displayName, email, password },
      {
        onSettled: reset({
          displayName: "",
          email: "",
          password: "",
        }),
      },
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="displayName">Username</label>
      <input
        type="text"
        {...register("displayName", { required: "Username is required" })}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: 6,
        })}
      />
      {!isLoading && <button type="submit">sign up</button>}
      {isLoading && <button disabled>loading</button>}
      {error && <p>{error.message}</p>}
    </form>
  );
}
