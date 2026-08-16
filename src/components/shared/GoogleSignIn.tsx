"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" {...props}>
    <path
      d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      fill="#34A853"
    />
    <path
      d="M5.27 14.28A7.16 7.16 0 0 1 4.9 12c0-.79.14-1.56.37-2.28V6.63H1.29A11.97 11.97 0 0 0 0 12c0 1.94.46 3.77 1.29 5.37l3.98-3.09z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.63l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      fill="#EA4335"
    />
  </svg>
);

const GoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Could not sign in with Google. Please try again.");
      }
    } catch (err) {
      toast.error("Could not sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleGoogleSignIn}
      disabled={isLoading}
      className="w-full gap-3  py-5 font-semibold"
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <GoogleIcon />
      )}
      <span>{isLoading ? "Signing in..." : "Sign in with Google"}</span>
    </Button>
  );
};

export default GoogleSignIn;