import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,remove, update } from "firebase/database";


// import { useContext } from "react";
// import { UserIdContext } from "../context/context";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  databaseURL: process.env.REACT_APP_databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// Created User
export const addUser = async (username, phoneNumber, userId, gender) => {
  try {
    await set(ref(db, "users/" + userId), {
      username: username,
      phoneNumber: phoneNumber,
      gender: gender,
      
    });
   
   
  } catch (error) {
    console.log(error);
  }
};

// Delete User

export const deleteUser = async (userId) => {
  try {

    remove(ref(db, 'users/' + userId))
    .then(() => {
        // Data delete successfully!
    })
    .catch((error) => {
        // The delete failed...
    });

   

  } catch (error) {
    console.log(error);
  }
};

export const editUser=(userId,username,phoneNumber,gender)=>{
  update(ref(db, 'users/' +userId),{
    username: username,
      phoneNumber: phoneNumber,
      gender: gender,
  })
  
}

export const dbRef = ref(getDatabase(app));
