"use client";

import React, { useEffect, useCallback, type JSX, type FormEvent } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthProviderButton from "@/components/common/button/auth-provider-button";
import useSignInWithEmailAndPassword from "../../hooks/useSignInWithEmailAndPassword";

export default function Login(): JSX.Element {
  const router = useRouter();
  const [signIn, state] = useSignInWithEmailAndPassword();

  const { loading, error } = state;

  const onSignIn = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    if (state.success) {
      // eslint-disable-next-line react/destructuring-assignment
      onSignIn();
    }
  }, [onSignIn, state.success]);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (loading) {
        return;
      }

      const data = new FormData(event.currentTarget);
      const email = data.get(`email`) as string;
      const password = data.get(`password`) as string;

      // sign user up
      await signIn(email, password);
    },
    [loading, signIn]
  );

  return (
    <div className="min-h-screen h-fit flex flex-col px-5 sm:px-8">
      <div className="logo">
        <Image src={Logo} alt="Logo" />
      </div>

      <h1 className="self-center auth-heading my-16">Login</h1>
      <div className="form-container">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="auth-form" onSubmit={onSubmit}>
          <label htmlFor="email">
            Email
            <input type="email" id="email" className="auth-input mb-5 mt-[6px]" name="email" />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              className="auth-input mb-5 mt-[6px]"
              name="password"
            />
          </label>

          {error !== null && error !== undefined ? (
            <span className="text-red-500">{error.message}</span>
          ) : null}

          <Link href="/login/reset-password" className="self-end my-2">
            Forgot Password?
          </Link>

          <button disabled={loading} className="primarybtn my-2 xl:my-3" type="submit">
            Login
          </button>
          <p className="self-center">OR</p>
          <AuthProviderButton />
          <Link href="/signup">
            <button className="secondarybtn my-2 xl:my-3" type="button">
              Create an account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
