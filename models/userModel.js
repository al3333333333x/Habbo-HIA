
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const saveUserProfile = (uid, data) => setDoc(doc(db, "users", uid), data);
export const getUserProfile = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};
