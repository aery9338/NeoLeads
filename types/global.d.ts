import type { DecodedIdToken } from "firebase-admin/auth";

declare module "@mdx-js/react";
declare module "remark-mdx";

declare global {
  type Maybe<T> = T | undefined;
}

declare module "next" {
  interface NextApiRequest {
    firebaseUser: DecodedIdToken;
  }
}
