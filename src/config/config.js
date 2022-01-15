// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDi3--XAdl2uIoxRTH-PXmyeLBeMexccec',
  authDomain: 'livechat-43c9f.firebaseapp.com',
  databaseURL: 'https://livechat-43c9f-default-rtdb.firebaseio.com',
  projectId: 'livechat-43c9f',
  storageBucket: 'livechat-43c9f.appspot.com',
  messagingSenderId: '1026529706421',
  appId: '1:1026529706421:web:e22899c002f1b3ec6359fc',
  measurementId: 'G-TWW78PSD4Q',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
