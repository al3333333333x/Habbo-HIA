
import { getUserProfile } from "../models/userModel.js";
export const fetchUserProfile = (uid) => getUserProfile(uid);
