/* eslint-disable import/no-extraneous-dependencies */
import { useCallback } from "react";
import { useAuth } from "reactfire";
import { type FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, type UserCredential } from "firebase/auth";
import useRequestState from "./useRequestState";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useSignUpWithEmailAndPassword() {
  const auth = useAuth();

  const { state, setLoading, setData, setError } = useRequestState<UserCredential, FirebaseError>();

  const signUp = useCallback(
    async (email: string, password: string) => {
      setLoading(true);

      try {
        const credential = await createUserWithEmailAndPassword(auth, email, password);

        setData(credential);
      } catch (error) {
        setError(error as FirebaseError);
      }
    },
    [auth, setData, setError, setLoading]
  );

  return [signUp, state] as [typeof signUp, typeof state];
}

export default useSignUpWithEmailAndPassword;
