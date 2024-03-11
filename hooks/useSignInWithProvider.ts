import { useAuth } from "reactfire";
import { type FirebaseError } from "firebase/app";

import {
  type AuthProvider,
  signInWithPopup,
  browserPopupRedirectResolver,
  type UserCredential,
} from "firebase/auth";

import { useCallback } from "react";
import useRequestState from "./useRequestState";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function useSignInWithProvider() {
  const auth = useAuth();

  const { state, setLoading, setData, setError } = useRequestState<UserCredential, FirebaseError>();

  const signInWithProvider = useCallback(
    async (provider: AuthProvider) => {
      setLoading(true);

      try {
        const credential = await signInWithPopup(auth, provider, browserPopupRedirectResolver);

        setData(credential);
      } catch (error) {
        setError(error as FirebaseError);
      }
    },
    [auth, setData, setError, setLoading]
  );

  return [signInWithProvider, state] as [typeof signInWithProvider, typeof state];
}
