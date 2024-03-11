"use client";

import React, { useState, type JSX } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";

export default function SetPassword(): JSX.Element {
  const [password, setPassword] = useState("");

  function handleForm(): void {}

  return (
    <div className="min-h-screen h-fit flex flex-col px-5 sm:px-8">
      <Link href="/" className="logo">
        <Image src={Logo} alt="Logo" />
      </Link>

      <h1 className="self-center auth-heading my-16">Create Password</h1>
      <div className="form-container">
        <form className="auth-form" onSubmit={handleForm}>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              className="auth-input mb-5 mt-[6px]"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <Link href="/pages/signup/setaccountdetails">
            <button className="primarybtn my-2 xl:my-3" type="submit">
              Set Password
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
