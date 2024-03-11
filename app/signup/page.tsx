"use client";

import React, { useEffect, useCallback, type JSX, type FormEvent } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";
import AuthProviderButton from "../../components/common/button/auth-provider-button";

export default function Signup(): JSX.Element {
  const router = useRouter();
  const [signUp, state] = useSignUpWithEmailAndPassword();

  const { loading, error } = state;

  const onSignup = useCallback(() => {
    localStorage.setItem("user-onboarding",JSON.stringify(true))
    router.push("/signup/set-account-details");
  }, [router]);

  useEffect(() => {
    if (state.success) {
      // eslint-disable-next-line react/destructuring-assignment
      onSignup();
    }
  }, [onSignup, state.success]);

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
      await signUp(email, password);
    },
    [loading, signUp]
  );

  return (
    <div className="min-h-screen h-fit flex flex-col px-5 sm:px-8">
      <div  className="logo">
        <Image src={Logo} alt="Company Logo" />
      </div>

      <h1 className="self-center auth-heading my-16">Get Started</h1>
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

          <button disabled={loading} className="primarybtn my-2 xl:my-3" type="submit">
            Next
          </button>
          <p className="self-center">OR</p>
          <AuthProviderButton />
          <Link href="/login">
            <button className="secondarybtn my-2 xl:my-3" type="button">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
