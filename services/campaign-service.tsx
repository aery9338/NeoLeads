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

interface Campaigns {
  id: string;
}

const campaigns = collection(firestore, "campaigns");

export const fetchCampaigns = async (): Promise<Campaigns[]> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const q = query(campaigns, where("uid", '==', auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const response: Campaigns[] = querySnapshot.docs.map(
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

export const createCampaigns = async (data: any): Promise<string | undefined> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const newData = { ...data, uid: auth.currentUser.uid };
    const docRef = await addDoc(campaigns, newData);
    return {...data, id: docRef.id};
    }
      return undefined;
    
  } catch (error) {
    console.error("Error adding document: ", error);
    return undefined;
  }
};

export const editCampaigns = async (id: string, data: any): Promise<void> => {
  const updateRef = doc(campaigns, id);
  await updateDoc(updateRef, data);
};
