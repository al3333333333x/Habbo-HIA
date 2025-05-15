
import { registerUser, loginUser, logoutUser } from "../models/authModel.js";
import { saveUserProfile } from "../models/userModel.js";

export const handleRegister = async (email, password, habboId, role) => {
  const result = await registerUser(email, password);
  await saveUserProfile(result.user.uid, { email, habboId, role });
};

export const handleLogin = (email, password) => loginUser(email, password);
export const handleLogout = () => logoutUser();
