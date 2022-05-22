import { Identifiable } from '@Models/identifiable';
import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase-config';

export class FirestoreService {
  colRef: CollectionReference;

  constructor(readonly collectionName: string) {
    this.colRef = collection(db, collectionName);
    console.log('create instanse');
  }

  async getData<T extends Identifiable>() {
    const q = query(this.colRef, orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) =>
        ({
          ...doc.data(),
          id: doc.id,
        } as T)
    );
  }

  async addData<T>(data: T) {
    return await addDoc(this.colRef, data);
  }
}
