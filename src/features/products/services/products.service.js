import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';



export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), product);
    console.log('Document written with ID: ', docRef.id);
    // return docRef.id;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error(error);
    throw error;
  }
};