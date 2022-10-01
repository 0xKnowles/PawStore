
//FireBase
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API,
  authDomain: "paw-orders.firebaseapp.com",
  databaseURL: "https://paw-orders-default-rtdb.firebaseio.com",
  projectId: "paw-orders",
  storageBucket: "paw-orders.appspot.com",
  messagingSenderId: "561230523205",
  appId: "1:561230523205:web:bd9cd68ab645c757b3ec2c",
  measurementId: "G-K756XNW9XQ"
})

const firestore = firebase.firestore();


function NewOrder() {
  const messagesRef = firestore.collection('Orders');
}