import { useState } from "react";

const DEFAULT_DATA = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={onChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
