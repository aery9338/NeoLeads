"use client";

import React from "react";
import { League_Spartan as leagueSpartan } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
// eslint-disable-next-line import/no-extraneous-dependencies
// import { initializeApp } from "firebase/app";

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  initializeAuth,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  inMemoryPersistence,
} from "firebase/auth";

// eslint-disable-next-line import/no-extraneous-dependencies
import { FirebaseAppProvider, AuthProvider } from "reactfire";

import configuration from "@/configuration";
import isBrowser from "@/lib/generic/isBrowser";
import { Provider } from "react-redux";
import AuthGuardedHOC from "../components/hoc/auth-guard";
import Sidebar from "../components/sidebar";
import { app } from "../firebase/firebase-config";
import store from "../store";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getAuthEmulatorHost() {
  const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
  const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;

  return ["http://", host, ":", port].join("");
}

const league = leagueSpartan({ subsets: ["latin"] });

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // we initialize the firebase app
  // using the configuration that we defined above
  // const app = initializeApp(configuration.firebase);

  // make sure we're not using IndexedDB when SSR
  // as it is only supported on browser environments
  const persistence = isBrowser() ? indexedDBLocalPersistence : inMemoryPersistence;

  const auth = initializeAuth(app, { persistence });

  // prevent emulator from being
  // called multiple times on page navigations
  if (configuration.emulator && !("emulator" in auth.config)) {
    // we can get the host by
    // combining the local emulator host with the Auth port
    const host = getAuthEmulatorHost();
    connectAuthEmulator(auth, host);
  }

  return (
    <html lang="en">
      <body
        className={`${league.className} min-h-screen h-fit w-full flex flex-col md:flex md:flex-row  antialiased`}
      >
        {pathname.includes("/login") || pathname.includes("/signup") ? null : <Sidebar />}
        <div
          className={`${
            pathname.includes("/login") || pathname.includes("/signup")
              ? "w-full"
              : "w-full md:w-11/12"
          }`}
        >
          <Provider store={store}>
            <FirebaseAppProvider firebaseApp={app}>
              <AuthProvider sdk={auth}>
              <AuthGuardedHOC whenSignedOut="/login">{children}</AuthGuardedHOC>
              </AuthProvider>
            </FirebaseAppProvider>
          </Provider>
        </div>
      </body>
    </html>
  );
}
