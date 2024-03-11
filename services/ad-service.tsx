import {
  collection,
  addDoc,
  getDocs,
  type DocumentData,
  type QueryDocumentSnapshot,
  doc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firestore } from "../firebase/firebase-config";

interface Ads {
  id: string;
}

const ads = collection(firestore, "ads");

export const fetchAds = async (): Promise<Ads[]> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const q = query(ads, where("uid", '==', auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const response: Ads[] = querySnapshot.docs.map(
      (document: QueryDocumentSnapshot<DocumentData>) => ({
        id: document.id,
        ...document.data(),
      })
    );
    return response;
    }
      return [];
    
  } catch (error) {
    console.error("Error fetching target audience:", error);
    return [];
  }
};

export const createAds = async (data: any): Promise<string | undefined> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const newData = { ...data, uid: auth.currentUser.uid };
    const docRef = await addDoc(ads, newData);
    return docRef.id;
    }
      return undefined; 
    
  } catch (error) {
    console.error("Error adding document: ", error);
    return undefined;
  }
};

export const editAds = async (id: string, data: any): Promise<void> => {
  const updateRef = doc(ads, id);
  await updateDoc(updateRef, data);
};
