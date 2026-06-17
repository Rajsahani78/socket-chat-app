import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { ChatLogo, UnderEyeOutline } from "../../../assets/icons";
import type { Registerform } from "../../../schemas/auth.schema";
import { useRegisterUserMutation } from "../../../services/auth";
import { toast } from "react-toastify";



const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser] = useRegisterUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Registerform>();

  const onSubmit = async (data: Registerform) => {
    try {
      const res = await registerUser(data).unwrap();
      console.log(res)
      if(res.message){
        localStorage.setItem("token", res.data)
        toast.success(res.message)
        navigate('/chat')
      }
    } catch (error: any) {
        toast.error(error?.data?.message ?? "Something went wrong")
    }
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-3xl border border-border bg-surface p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 rounded-2xl bg-brand-gradient p-3">
            <ChatLogo width={40} height={40} />
          </div>

          <h1 className="text-3xl font-bold text-text-primary">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            Register to start chatting with friends
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-primary"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-error">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-primary"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-error">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full rounded-xl border border-border bg-white px-4 py-3 pr-12 outline-none transition focus:border-primary"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <UnderEyeOutline />
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-error">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Avatar (Optional) */}
          <div>
            <label
              htmlFor="avatar"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Avatar <span className="text-xs">(Optional)</span>
            </label>

            <input
              id="avatar"
              type="file"
              accept="image/*"
              {...register("avatar")}
              className="w-full rounded-xl border border-border bg-white px-4 py-3"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded-xl bg-primary py-3 font-medium text-white transition hover:bg-primary-hover disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;