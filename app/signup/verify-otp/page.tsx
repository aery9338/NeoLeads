"use client";

import React, { useState, type JSX } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";

export default function VerifyOTP(): JSX.Element {
  const [otp, setOtp] = useState("");

  function handleForm(): void {}

  return (
    <div className="min-h-screen h-fit flex flex-col px-5 sm:px-8">
      <Link href="/" className="logo">
        <Image src={Logo} alt="Logo" />
      </Link>

      <h1 className="self-center auth-heading my-16">Check Email for OTP</h1>
      <div className="form-container">
        <form className="auth-form" onSubmit={handleForm}>
          <label htmlFor="otp">
            Enter OTP to verify
            <input
              type="text"
              id="otp"
              className="auth-input mb-5 mt-[6px]"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </label>

          <Link href="/pages/signup/setpassword">
            <button className="primarybtn my-2 xl:my-3" type="submit">
              Next
            </button>
          </Link>
          <p className="self-center">OR</p>
          <Link href="/auth/login">
            <button className="secondarybtn my-2 xl:my-3" type="button">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
