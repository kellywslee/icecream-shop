import { useForm } from "react-hook-form";
import uploadImage from "../services/uploader";
import { useAddNewIceCream } from "../hooks/useIceCreams";
import Button from "./ui/Button";

export default function NewIceCreamForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { addNewIceCream, isLoading } = useAddNewIceCream();

  const onSubmit = async (data) => {
    const file = data.image[0];
    console.log(data);

    try {
      const imageUrl = await uploadImage(file);
      console.log(imageUrl);

      addNewIceCream(
        {
          ...data,
          image: imageUrl,
        },
        {
          onSuccess: () => {
            reset();
          },
        },
      );
    } catch (error) {
      console.error("Error uploading image or adding new ice cream:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-4/5 max-w-96 flex-col gap-2"
    >
      <input
        type="text"
        placeholder="title*"
        aria-label="title"
        aria-invalid={errors.title ? "true" : "false"}
        {...register("title", { required: true })}
        className="auth-input"
      />
      {errors.title && errors.title.type === "required" && (
        <span role="alert" className="auth-span">
          Title is required
        </span>
      )}
      <input
        type="number"
        placeholder="price*"
        aria-label="price"
        aria-invalid={errors.price ? "true" : "false"}
        {...register("price", { required: true })}
        className="auth-input"
      />
      {errors.price && errors.price.type === "required" && (
        <span role="alert" className="auth-span">
          Price is required
        </span>
      )}
      <input
        type="text"
        placeholder="category*"
        aria-label="category"
        aria-invalid={errors.category ? "true" : "false"}
        {...register("category", { required: true })}
        className="auth-input"
      />
      {errors.category && errors.category.type === "required" && (
        <span role="alert" className="auth-span">
          Category is required
        </span>
      )}
      <input
        type="text"
        placeholder="description*"
        aria-label="description"
        aria-invalid={errors.description ? "true" : "false"}
        {...register("description", { required: true })}
        className="auth-input"
      />
      {errors.description && errors.description.type === "required" && (
        <span role="alert" className="auth-span">
          Description is required
        </span>
      )}
      <input
        type="text"
        placeholder="options*"
        aria-label="options"
        aria-invalid={errors.options ? "true" : "false"}
        {...register("options", { required: true })}
        className="auth-input"
      />
      {errors.options && errors.options.type === "required" && (
        <span role="alert" className="auth-span">
          Options is required
        </span>
      )}
      <input
        type="file"
        placeholder="image*"
        accept="image/*"
        aria-label="image"
        aria-invalid={errors.image ? "true" : "false"}
        {...register("image", { required: true })}
        className="auth-input text-rose-700 transition-all file:mr-3 file:rounded-md file:border-0 file:bg-rose-950 file:px-2 file:text-xs file:font-semibold file:text-yellow-200 file:hover:bg-pink-600"
      />
      {errors.image && errors.image.type === "required" && (
        <span role="alert" className="auth-span">
          Image is required
        </span>
      )}
      <Button type="form" disabled={isLoading}>
        {isLoading ? "Loading" : "Add"}
      </Button>
    </form>
  );
}
