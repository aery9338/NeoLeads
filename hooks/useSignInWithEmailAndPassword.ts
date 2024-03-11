/* eslint-disable import/no-extraneous-dependencies */
import { useCallback } from "react";
import { useAuth } from "reactfire";
import { type FirebaseError } from "firebase/app";
import { type UserCredential, signInWithEmailAndPassword } from "firebase/auth";

import useRequestState from "./useRequestState";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useSignInWithEmailAndPassword() {
  const auth = useAuth();

  const { state, setLoading, setData, setError } = useRequestState<UserCredential, FirebaseError>();

  const signIn = useCallback(
    async (email: string, password: string) => {
      setLoading(true);

      try {
        const credential = await signInWithEmailAndPassword(auth, email, password);

        setData(credential);
      } catch (error) {
        setError(error as FirebaseError);
      }
    },
    [auth, setData, setError, setLoading]
  );

  return [signIn, state] as [typeof signIn, typeof state];
}

export default useSignInWithEmailAndPassword;
