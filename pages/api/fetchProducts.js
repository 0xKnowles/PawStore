import { useState } from "react"
import products from "./products.json";
import {db} from './FbConfig'
import {
  collection,
  getDocs,
} from 'firebase/firestore';

const colRef = collection(db, 'ForSale')


export default function handler(req, res) {

  // If get request
  if (req.method === "GET") {

    res.status(200).json(colRef);
  } else {
    res.status(405).send(`Method ${req.method} not allowed`);
  }
}
