import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChatLogo, UnderEye, UnderEyeOutline } from "../../../assets/icons";
import { loginSchema, type LoginFormData } from "../../../schemas/auth.schema";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "../../../services/auth";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [login] = useLoginMutation()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const res = await login(data).unwrap();
            console.log(res)
            if(res?.data){
                localStorage.setItem("token", res?.data)
                navigate("/chat")
            }
        } catch (error: any) {
            toast.error(error?.data?.message ?? "Something went wrong!")
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
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-text-secondary">
                        Login to continue chatting with friends
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
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
                            {...register("email")}
                            className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-primary"
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-error">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

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
                                {...register("password")}
                                className="w-full rounded-xl border border-border bg-white px-4 py-3 pr-12 outline-none transition focus:border-primary"
                            />


                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                {showPassword ? <UnderEyeOutline /> : <UnderEye />}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="mt-1 text-sm text-error">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full cursor-pointer rounded-xl bg-primary py-3 font-medium text-white transition hover:bg-primary-hover disabled:opacity-50"
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center text-sm text-text-secondary">
                    Don't have an account?{" "}
                    <Link
                        to={'/register'}
                        type="button"
                        className="cursor-pointer font-medium text-primary hover:underline"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;