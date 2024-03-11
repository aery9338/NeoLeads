/* eslint-disable import/no-extraneous-dependencies */
import { useCallback } from "react";
import { useAuth } from "reactfire";
import { type FirebaseError } from "firebase/app";
import { type UserCredential, sendPasswordResetEmail } from "firebase/auth";

import useRequestState from "./useRequestState";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useForgetPassword() {
  const auth = useAuth();

  const { state, setLoading, setError } = useRequestState<UserCredential, FirebaseError>();

  const forgetPassword = useCallback(
    async (email: string) => {
      setLoading(true);

      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
        setError(error as FirebaseError);
      }
    },
    [auth, setError, setLoading]
  );

  return [forgetPassword, state] as [typeof forgetPassword, typeof state];
}

export default useForgetPassword;
