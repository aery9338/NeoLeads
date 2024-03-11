import {
  collection,
  addDoc,
  getDoc,
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

interface TargetAudience {
  id: string;
}
interface SampleTargetAudience {
  id: string;
}

const targetAudience = collection(firestore, "targetAudience");
const sampleTargetAudience = collection(firestore, "sampleTargetAudience");

export const fetchTargetAudiences = async (): Promise<TargetAudience[]> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const q = query(targetAudience, where("uid", '==', auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const response: TargetAudience[] = querySnapshot.docs.map(
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

export const createTargetAudience = async (data: any): Promise<string | undefined> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const newData = { ...data, uid: auth.currentUser.uid };
    const docRef = await addDoc(targetAudience, newData);
    return docRef.id;
    }
      return undefined;
    
  } catch (error) {
    console.error("Error adding document: ", error);
    return undefined;
  }
};

export const editTargetAudience = async (id: string, data: any): Promise<void> => {
  const updateRef = doc(targetAudience, id);
  await updateDoc(updateRef, data);
};

export const getSpecificTargetAudience = async (id: string): Promise<TargetAudience | null> => {
  const docRef = doc(targetAudience, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const specificTargetAudience: TargetAudience = {
      id: docSnap.id,
      ...docSnap.data(),
    };
    return specificTargetAudience;
  }
  console.log("No such document!");
  return null;
};


export const fetchSampleTargetAudiences = async (): Promise<SampleTargetAudience[]> => {
  try {
    const q = query(sampleTargetAudience);
    const querySnapshot = await getDocs(q);
    const response: SampleTargetAudience[] = querySnapshot.docs.map(
      (document: QueryDocumentSnapshot<DocumentData>) => ({
        id: document.id,
        ...document.data(),
      })
    );
    console.log("response",response)
    return response;
    
  } catch (error) {
    console.error("Error fetching target audience:", error);
    return [];
  }
};
// Uncomment and modify the following functions based on your specific needs:

// export const deleteTargetAudience = async (id: string): Promise<void> => {
//   await targetAudienceCollection.doc(id).delete();
// }

