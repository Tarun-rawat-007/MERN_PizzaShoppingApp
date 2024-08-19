import { firebaseapp } from "../firebase/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const OAuth = async () => {
  try {
    // Initialize the Google auth provider
    const provider = new GoogleAuthProvider();

    // Set custom parameters
    provider.setCustomParameters({
      prompt: "select_account",
    });

    // Initialize Firebase Auth
    const auth = getAuth(firebaseapp); // Make sure you are passing your initialized Firebase app if needed

    // Sign in with a popup
    const userCred = await signInWithPopup(auth, provider);

    // Return user credentials
    return userCred;
  } catch (error) {
    // Handle errors
    console.error("Error during OAuth login:", error);
    throw error; // Re-throwing to allow the calling function to handle it if needed
  }
};