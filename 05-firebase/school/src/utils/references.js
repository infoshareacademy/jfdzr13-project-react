import { db } from "../config/firebase.js";
import { collection } from "firebase/firestore";

const classesCollection = collection(db, "classes");
const studentsCollection = collection(db, "students");
const teachersCollection = collection(db, "teachers");

export { classesCollection, studentsCollection, teachersCollection };