import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBmXIFRLvhUq8ILvygMJRxuUz3gfaPyL58",
  authDomain: "langzila-52273.firebaseapp.com",
  projectId: "langzila-52273",
  storageBucket: "langzila-52273.appspot.com",
  messagingSenderId: "860824367778",
  appId: "1:860824367778:web:f4781261202e26dc2a1dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export default auth;
export async function upload(file, user, setLoading,displayName) {
  const fileRef = ref(storage, user.uid);

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(user, {displayName,photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}