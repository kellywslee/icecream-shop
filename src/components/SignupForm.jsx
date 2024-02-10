import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignup from "../hooks/useSignup";
import Button from "./ui/Button";

export default function SignupForm() {
  const { signup, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const { displayName, email, password } = data;
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-4/5 max-w-96 flex-col gap-2"
    >
      <input
        type="text"
        placeholder="username*"
        aria-label="username"
        aria-invalid={errors.displayName ? "true" : "false"}
        {...register("displayName", { required: true })}
        className="auth-input"
      />
      {errors.displayName && errors.displayName.type === "required" && (
        <span role="alert" className="auth-span">
          Username is required
        </span>
      )}

      <input
        type="email"
        placeholder="email*"
        aria-label="email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
        className="auth-input"
      />
      {errors.email && errors.email.type === "required" && (
        <span role="alert" className="auth-span">
          Email is required
        </span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span role="alert" className="auth-span">
          Invalid email format
        </span>
      )}

      <input
        type="password"
        placeholder="password*"
        aria-label="password"
        aria-invalid={errors.password ? "true" : "false"}
        {...register("password", {
          required: true,
          minLength: {
            value: 6,
            message: "Password must have at least 6 characters",
          },
        })}
        className="auth-input"
      />
      {errors.password && errors.password.type === "required" && (
        <span role="alert" className="auth-span">
          Password is required
        </span>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <span role="alert" className="auth-span">
          {errors.password.message}
        </span>
      )}

      <input
        type="password"
        placeholder="confirm password*"
        aria-label="confirm password"
        aria-invalid={errors.confirmPassword ? "true" : "false"}
        {...register("confirmPassword", {
          required: true,
          validate: (value) => {
            const { password } = getValues();
            return value === password || "Passwords do not match";
          },
        })}
        className="auth-input"
      />
      {errors.confirmPassword && errors.confirmPassword.type === "required" && (
        <span role="alert" className="auth-span">
          Confirm password is required
        </span>
      )}
      {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
        <span role="alert" className="auth-span">
          {errors.confirmPassword.message}
        </span>
      )}
      {!isLoading && <Button type="form">sign up</Button>}
      {isLoading && (
        <Button disabled type="form">
          loading...
        </Button>
      )}
      <Link
        to="/login"
        className="mt-2 text-center text-xs transition-all hover:font-semibold hover:underline"
      >
        Already a member? Sign In!
      </Link>
    </form>
  );
}
