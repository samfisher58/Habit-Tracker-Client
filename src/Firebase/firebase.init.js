// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAZS4iFQGglIKkv-FEbQNwa8V6f7cH1kow',
	authDomain: 'habit-tracker-ba322.firebaseapp.com',
	projectId: 'habit-tracker-ba322',
	storageBucket: 'habit-tracker-ba322.firebasestorage.app',
	messagingSenderId: '408703316355',
	appId: '1:408703316355:web:4c21fe7a1a6bb6f3a586b6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
