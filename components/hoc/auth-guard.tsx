// todo: chnage from hoc to middleware auth guard using server side authentication check
import React, { useEffect } from "react";
import { useAuth, useSigninCheck } from "reactfire";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AuthGuardedHOC({
  children,  whenSignedOut,
}: React.PropsWithChildren<{
   whenSignedOut: string;
}>) {
  const auth = useAuth();
  const { status } = useSigninCheck();

  useEffect(() => {
    // keep this running for the whole session
    // unless the component was unmounted, for example, on log-outs
    const listener = auth.onAuthStateChanged((user) => {
      const shouldLogOut = (user === null || user === undefined) && whenSignedOut;

      // log user out if user is falsy
      // and if the consumer provided a route to redirect the user
      if (shouldLogOut !== null) {
        const guestRoutes = ["/login", "/signup"];

        // we then redirect the user to the page
        // specified in the props of the component

        if (typeof window !== "undefined") {
          // Client-side-only code
          if (!guestRoutes.some((element) => window.location.pathname.startsWith(element))) {
            window.location.assign(whenSignedOut);
          }
        }
      }
    });

    // destroy listener on un-mounts
    // eslint-disable-next-line consistent-return
    return () => {
      listener();
    };
  }, [auth, status, whenSignedOut]);

  if (status === "loading") {
    return (
      <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      <ToastContainer autoClose={1800} hideProgressBar className="!w-auto !whitespace-nowrap" />
      {children}
    </>
  );
}
