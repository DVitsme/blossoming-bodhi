import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const firebase = initializeApp(firebaseConfig);
// const { FieldValue } = Firebase.firestore;

// handle auth
const auth = getAuth(firebase);
const authSignUpEmail = async ({ email, password, name }) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: name });
  return user;
};

const authSignInEmail = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
const authSignInGooglePopup = async () => {
  const user = await signInWithPopup(auth, new GoogleAuthProvider());
  return user;
};

const authSignOut = async () => await signOut(auth);

export {
  firebase,
  auth,
  authSignInGooglePopup,
  authSignInEmail,
  authSignUpEmail,
  authSignOut
};
