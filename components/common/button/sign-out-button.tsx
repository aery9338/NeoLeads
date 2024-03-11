import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { useAuth } from "reactfire";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function SignOutButton() {
  const auth = useAuth();

  const onSignOutRequested = useCallback(async () => {
    await signOut(auth);
  }, [auth]);

  return (
    <button
      type="button"
      className="inline-block align-left rounded-lg p-2 font-bold bg-red-400 text-white"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={onSignOutRequested}
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
