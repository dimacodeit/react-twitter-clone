import { Identifiable } from '@Models/identifiable';
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
} from 'firebase/firestore';
import db from '../firebase-config';

const getCollectionRef = (collectionName: string) => collection(db, collectionName);

export async function getData<T extends Identifiable>(collectionName: string) {
  const colRef = getCollectionRef(collectionName);
  const q = query(colRef, orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (document) => ({
      ...document.data(),
      id: document.id,
    } as T),
  );
}

export async function addData<T>(collectionName: string, data: T) {
  const colRef = getCollectionRef(collectionName);
  const result = await addDoc(colRef, data);
  return result;
}

export async function editData<T>(collectionName: string, id: string, data: T) {
  const docRef = doc(getCollectionRef(collectionName), id);
  const result = await updateDoc(docRef, data);
  return result;
}

export async function deleteData(collectionName: string, id: string) {
  const docRef = doc(getCollectionRef(collectionName), id);
  const result = await deleteDoc(docRef);
  return result;
}
