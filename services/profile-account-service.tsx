import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getAuth, updateProfile, updateEmail, updatePassword, sendEmailVerification   } from "firebase/auth";
import { firestore, storage } from "../firebase/firebase-config";

const profileAccount = collection(firestore, "profileAccount");


export const createProfileAccount = async (data: any): Promise<string | undefined> => {
  try {
    const docRef = await addDoc(profileAccount, data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return undefined;
  }
};

export const editProfileAccount = async ({profile, firstname, lastname, email, imageUrl, newpassword}: any): Promise<void> => {
  const auth = getAuth();
  if (auth.currentUser !== null && auth.currentUser !== undefined) {
    if (
      typeof firstname === 'string' && firstname !== '' &&
      typeof lastname === 'string' && lastname !== ''
    ) {
      let finalFirstName = "";
      let finalLastName = "";
      if(firstname !== profile.firstname ){
         finalFirstName = firstname
      }else{
        finalFirstName = firstname
      }
      if(lastname !== profile.lastname ){
        finalLastName = lastname
      }else{
        finalLastName = lastname
      }
 await updateProfile(auth.currentUser,{
        displayName:`${finalFirstName} ${finalLastName}`
      }).then(() => {
       console.log("Profile Updated DisplayName")
      }).catch((error: any) => {
      console.error("Error updating profile display name:", error.message);
      throw error;
    });
    }

   if((imageUrl !== null && imageUrl !== undefined) || (profile?.photoURL !== null && profile?.photoURL !== undefined)){
  const finalImageUrl = imageUrl ?? profile.photoURL
    
  await updateProfile(auth.currentUser,{
        photoURL : finalImageUrl
      }).then(() => {
       console.log("Profile Image Updated")
      }).catch((error: any) => {
      console.error("Error updating profile image:", error.message);
      throw error;
    });
  
  } 
    if(email !== null && email !== undefined ){
      let finalEmail = ""
      if(email !== profile.email ){
        finalEmail = email
     }else{
      finalEmail = email
     }
     const user = auth.currentUser
     if(user !== null){
   await updateEmail(user, finalEmail).then(async () => { await sendEmailVerification(user); })
  .then(() => {
    console.log("Profile Email Updated");
  })
  .catch((error) => {
    console.error("Error updating profile email:", error.message);
    throw error;
  });
}
  }

  if(newpassword !== null && newpassword !== undefined){
   await updatePassword(auth.currentUser, newpassword).then(() => {
      console.log("Profile Password Updated")
    }).catch((error) => {
      console.error("Error updating profile password:", error.message);
      throw error;
    });
  }
}
};

export const createProfileAccountImage = async (data: File): Promise<string | undefined> => {
  try {
    const storageRef = ref(storage, `profile_images/${data.name}`);
    const snapshot = await uploadBytes(storageRef, data);
    const imageUrl = await getDownloadURL(snapshot.ref);
    return imageUrl.toString();
  } catch (error) {
    console.error("Error adding file: ", error);
    return undefined;
  }
};

// Uncomment and modify these functions based on your data structure

export const fetchSpecificProfile = async (id: string): Promise<any | null> => {
  const docRef = doc(profileAccount, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const specificProfile = {
      id: docSnap.id,
      ...docSnap.data(),
    };
    return specificProfile;
  }
  return null;
};

// export const deleteProfile = async (id: string): Promise<void> => {
//     await profileAccount.doc(id).delete();
// };
