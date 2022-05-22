
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUKET,
    messagingSenderId: process.env.MESSAGIN_SENDIN_ID,
    appId: process.env.APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;