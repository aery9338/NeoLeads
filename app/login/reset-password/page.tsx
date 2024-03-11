"use client";

import React, { useEffect, useCallback, type JSX, type FormEvent } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useForgetPassword from "@/hooks/useForgetPassword";

export default function ResetPassword(): JSX.Element {
  const router = useRouter();
  const [forgetPassword, state] = useForgetPassword();

  const { loading, error } = state;

  const onforgetPassword = useCallback(() => {
    router.push("/login");
  }, [router]);

  useEffect(() => {
    if (state.success) {
      // eslint-disable-next-line react/destructuring-assignment
      onforgetPassword();
    }
  }, [onforgetPassword, state.success]);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (loading) {
        return;
      }

      const data = new FormData(event.currentTarget);
      const email = data.get(`email`) as string;

      // sign user up
      await forgetPassword(email);
    },
    [loading, forgetPassword]
  );

  return (
    <div className="min-h-screen h-fit flex flex-col px-5 sm:px-8">
      <Link href="/" className="logo">
        <Image src={Logo} alt="Logo" />
      </Link>

      <h1 className="self-center auth-heading my-16">Reset Password</h1>
      <div className="form-container">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="auth-form" onSubmit={onSubmit}>
          <label htmlFor="email">
            Email
            <input type="email" id="email" className="auth-input mb-5 mt-[6px]" name="email" />
          </label>

          {error !== null && error !== undefined ? (
            <span className="text-red-500">{error.message}</span>
          ) : null}

          <button className="primarybtn my-2 xl:my-3" type="submit">
            Send password reset email
          </button>
          <p className="self-center">OR</p>
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
