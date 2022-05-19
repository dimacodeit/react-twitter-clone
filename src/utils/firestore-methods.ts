import { Identifiable } from '@Models/identifiable';
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase-config';

export async function getData<T extends Identifiable>(collectionName: string) {
  const colRef = collection(db, collectionName);
  const q = query(colRef, orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
        id: doc.id,
      } as T)
  );
}

export async function addData<T>(collectionName: string, data: T) {
  const colRef = collection(db, collectionName);
  return await addDoc(colRef, data);
}
