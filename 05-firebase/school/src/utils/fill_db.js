import { addDoc } from "firebase/firestore";
import { classesCollection, studentsCollection, teachersCollection } from "./references.js";
import { classes, students, teachers } from "./data.js";


export const fillUpDb = async () => {
    await Promise.all(classes.map(c => addDoc(classesCollection, c)));
    await Promise.all(students.map(s => addDoc(studentsCollection, s)));
    await Promise.all(teachers.map(t => addDoc(teachersCollection, t)));
}

fillUpDb();