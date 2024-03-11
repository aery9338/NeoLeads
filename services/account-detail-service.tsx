import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firestore } from "../firebase/firebase-config";

const accountDetails = collection(firestore, "accountDetails");

export const saveAccountDetails = async (data: any): Promise<string | undefined> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const newData = { ...data, uid: auth.currentUser.uid };
    const docRef = await addDoc(accountDetails, newData);
    return docRef.id;
    }
      return undefined;
    
  } catch (error) {
    console.error("Error adding document: ", error);
    return undefined;
  }
};
