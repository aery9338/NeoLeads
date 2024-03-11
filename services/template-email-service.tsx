import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  getDocs,
  type DocumentReference,
  type QuerySnapshot,
  type DocumentData,
  type QueryDocumentSnapshot,
  where,
  query,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firestore } from "../firebase/firebase-config";

interface Templates {
  id: string;
}

interface SampleTemplate {
  id: string;
}

const templates = collection(firestore, "templates");
const sampleTemplate = collection(firestore, "sampleTemplates");

export const fetchTemplateEmails = async (): Promise<Templates[]> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const q = query(templates, where("uid", '==', auth.currentUser.uid));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    const response: Templates[] = querySnapshot.docs.map(
      (document: QueryDocumentSnapshot<DocumentData>) => ({
        id: document.id,
        ...document.data(),
      })
    );
    return response;
    }
      return [];
    
  } catch (error) {
    console.error("Error fetching template:", error);
    throw error;
  }
};

export const createTemplateEmail = async (data: any): Promise<{ id: string; data: any }> => {
  const auth = getAuth();
  try {
    if (auth.currentUser !== null && auth.currentUser !== undefined) {
    const newData = { ...data, uid: auth.currentUser.uid };
    const docRef: DocumentReference<DocumentData> = await addDoc(templates, newData);
    return { id: docRef.id, data };
    }
      return { id: "", data: null };
    
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

export const editTemplateEmail = async (id: string, data: any): Promise<void> => {
  const updateRef = doc(templates, id);
  await updateDoc(updateRef, { template: data });
};

export const fetchSampleTemplates = async (): Promise<SampleTemplate[]> => {
  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(sampleTemplate);
    const response: SampleTemplate[] = querySnapshot.docs.map(
      (document: QueryDocumentSnapshot<DocumentData>) => ({
        id: document.id,
        ...document.data(),
      })
    );
    return response;
  } catch (error) {
    console.error("Error fetching template:", error);
    throw error;
  }
};

export const fetchSpecificTemplate = async (id: string): Promise<Templates | null> => {
  const docRef = doc(templates, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const specificTemplate: Templates = {
      id: docSnap.id,
      ...docSnap.data(),
    };
    return specificTemplate;
  }
  return null;
};

// Uncomment and modify these functions based on your data structure

// export const deleteTemplate = async (id: string): Promise<void> => {
//   await templateEmail.doc(id).delete();
// };

// export const editTemplate = async (id: string, data: any): Promise<void> => {
//   await templateEmail.doc(id).update(data);
// };
