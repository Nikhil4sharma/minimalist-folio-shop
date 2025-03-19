
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUy8e97pv4BqJuHtQIszX1XFnuXgneFwk",
  authDomain: "business-card-print.firebaseapp.com",
  projectId: "business-card-print",
  storageBucket: "business-card-print.appspot.com",
  messagingSenderId: "117769901506",
  appId: "1:117769901506:web:1e3d33e601334a0e25325b",
  measurementId: "G-ECJ5EC6TBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);

// Helper function to create admin users (for development purposes)
// In production, this should be done through a secure backend
export const setupAdminUser = async (uid: string) => {
  try {
    const { setDoc, doc } = await import('firebase/firestore');
    await setDoc(doc(db, 'users', uid), {
      role: 'admin',
      createdAt: new Date(),
    });
    console.log('Admin user created successfully');
    return true;
  } catch (error) {
    console.error('Error creating admin user:', error);
    return false;
  }
};

export default app;
