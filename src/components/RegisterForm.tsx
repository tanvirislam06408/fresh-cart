"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export function RegisterForm() {
    const { showToast } = useCart();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router=useRouter();
    // Password match status
    const passwordsMatch = confirmPassword.length > 0 ? password === confirmPassword : true;

    // Handle standard Email & Password Registration submit
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName || !email || !password || !confirmPassword) {
            showToast("Please fill in all required fields.");
            return;
        }

        if (password.length < 8) {
            showToast("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            showToast("Passwords do not match. Please check and try again.");
            return;
        }

        if (!acceptTerms) {
            showToast("Please accept the Terms of Service & Privacy Policy.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Send the real password as-is — never mask/mangle it before sending.
            const { data, error } = await authClient.signUp.email({
                name: fullName,
                email,
                password,
            });

            console.log("RAW RESULT:", { data, error });


            if (error) {
                toast.error(error?.message || "Something went wrong, please try again later.");
                return;
            }

            if (data) {
                toast.success(`Welcome, ${data.user.name}! Your account has been created.`, {
                    duration: 4000,
                    position: "top-right",
                });
                console.log('user from data.user');
                setFullName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setAcceptTerms(false);
                setShowPassword(false);
                setShowConfirmPassword(false);
                router.replace('/')
            }
        } catch (err) {
            toast.error("Something went wrong, please try again later.");
        } finally {
            // Always reset submitting state, whether it succeeded or failed.
            setIsSubmitting(false);
        }
    };

    // Handle Facebook Sign Up click
    const handleFacebookRegister = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "facebook",
            });

            if (data?.error) {
                showToast(`${data.error.message}`);
            }
        } catch (err) {
            showToast("Could not sign up with Facebook. Please try again.");
        }
    };

    return (
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
            <div>
                {/* Header & Toggle Switch */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                            Create Your Account
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Fill in your details or register with your social profile
                        </p>
                    </div>
                    <div className="inline-flex p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
                        <Link
                            href="/login"
                            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:text-emerald-700 transition-colors"
                        >
                            Login
                        </Link>
                        <span className="px-4 py-1.5 rounded-lg text-xs font-bold bg-white text-emerald-700 shadow-sm">
                            Register
                        </span>
                    </div>
                </div>

                {/* Facebook Social Sign Up Button */}
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={handleFacebookRegister}
                        className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] active:bg-[#1464D2] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] group text-sm sm:text-base"
                    >
                        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span>Sign up with Facebook</span>
                        <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform ml-auto hidden sm:inline" />
                    </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-6">
                    <div className="border-t border-gray-200 w-full" />
                    <span className="bg-white px-4 text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0">
                        Or register with email
                    </span>
                    <div className="border-t border-gray-200 w-full" />
                </div>

                {/* Standard Registration Form */}
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                            Full Name
                        </label>
                        <div className="relative rounded-xl shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                <User className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Alex Morgan"
                                className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <div className="relative rounded-xl shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="alex@example.com"
                                className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                            />
                        </div>
                    </div>

                    {/* Grid for Password & Confirm Password */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Password */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative rounded-xl shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="block w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                Confirm Password
                            </label>
                            <div className="relative rounded-xl shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className={`block w-full pl-11 pr-10 py-3 bg-gray-50 border rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${!passwordsMatch
                                        ? "border-rose-400 focus:ring-rose-500/20 focus:border-rose-600"
                                        : "border-gray-200 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white"
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {!passwordsMatch && (
                        <div className="flex items-center gap-1.5 text-rose-600 text-xs font-semibold">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Passwords do not match</span>
                        </div>
                    )}

                    {/* Terms Checkbox */}
                    <div className="pt-2">
                        <label className="flex items-start gap-2.5 cursor-pointer group select-none">
                            <input
                                type="checkbox"
                                required
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer mt-0.5 shrink-0"
                            />
                            <span className="text-xs text-gray-600 font-medium leading-normal">
                                I agree to the FreshCart{" "}
                                <a href="#" className="text-emerald-700 font-semibold underline underline-offset-2">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-emerald-700 font-semibold underline underline-offset-2">
                                    Privacy Policy
                                </a>
                                .
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 text-base disabled:opacity-75"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Creating account...</span>
                            </div>
                        ) : (
                            <>
                                <span>Create FreshCart Account</span>
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Bottom Switch Link */}
            <div className="mt-8 text-center border-t border-gray-100 pt-6">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-4 transition-colors"
                    >
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
}