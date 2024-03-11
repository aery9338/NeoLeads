import React, { useCallback, useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import useSignInWithProvider from "../../../hooks/useSignInWithProvider";

// you should add this to the render
// function of the sign-up.tsx component
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, react/prop-types
export default function AuthProviderButton() {
  const router = useRouter();

  const [signInWithProvider, signInWithProviderState] = useSignInWithProvider();

  const onSignIn = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    if (signInWithProviderState.success) {
      onSignIn();
    }
  }, [signInWithProviderState.success, onSignIn]);

  return (
    <button
      type="button"
      className="rounded-lg p-2 font-bold bg-red-400 text-white"
      onClick={() => {
        void signInWithProvider(new GoogleAuthProvider());
      }}
    >
      Login with Google
    </button>
  );
}
