
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
const db = getFirestore();

export const submitBadgeRequest = (data) => addDoc(collection(db, "badge_requests"), data);
export const fetchBadgeRequests = async () => {
  const querySnapshot = await getDocs(collection(db, "badge_requests"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const updateBadgeRequestStatus = (id, status) =>
  updateDoc(doc(db, "badge_requests", id), { status });
