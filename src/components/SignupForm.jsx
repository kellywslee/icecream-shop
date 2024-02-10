import { useForm } from "react-hook-form";
import useSignup from "../hooks/useSignup";

export default function SignupForm() {
  const { signup, isLoading, error } = useSignup();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
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
      {errors.displayName && <p>{errors.displayName.message}</p>}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must have at least 6 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword", {
          validate: (value) => {
            const { password } = getValues();
            return value === password || "Passwords do not match";
          },
        })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      {!isLoading && <button type="submit">sign up</button>}
      {isLoading && <button disabled>loading</button>}
      {error && <p>{error.message}</p>}
    </form>
  );
}
