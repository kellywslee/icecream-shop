import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useAuth";
import Button from "./ui/Button";

export default function LoginForm() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "demo@testemail.com",
      password: import.meta.env.VITE_DEMO_PASSWORD,
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    login(
      { email, password },
      {
        onSettled: reset({
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
      {!isLoading && <Button type="form">log in</Button>}
      {isLoading && (
        <Button disabled type="form">
          loading...
        </Button>
      )}
      <Link
        to="/signup"
        className="mt-2 text-center text-xs transition-all hover:font-semibold hover:underline"
      >
        Don&apos;t have an account? Sign Up
      </Link>
    </form>
  );
}
