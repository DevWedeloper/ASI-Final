import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByCl2qa4O2AxZFseZM0LDFFEPG5CpK8FQ",
  authDomain: "asi-db.firebaseapp.com",
  databaseURL: "https://asi-db-default-rtdb.firebaseio.com",
  projectId: "asi-db",
  storageBucket: "asi-db.appspot.com",
  messagingSenderId: "974504790991",
  appId: "1:974504790991:web:fe27002d1dd25ba40da0ba",
  measurementId: "G-Y9XFB91DQP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);