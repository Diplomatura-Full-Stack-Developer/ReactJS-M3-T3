import { collection, addDoc, getDocs, updateDoc, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { products } from '../../../data/products';


export const seedProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    for (const productDoc of querySnapshot.docs) {
      await deleteDoc(doc(db, 'products', productDoc.id));
    }
    for (const product of products) {
      await addDoc(collection(db, 'products'), product);
    }
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((product) => !product.deleted);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDeletedProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((product) => product.deleted);
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const getProductById = async (id) => {
  try {
    const docSnapshot = await getDoc(doc(db, 'products', id));
    return docSnapshot.data();
  } catch (error) {
    console.error(error);
    throw error;
  }
};


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


// This function is used to delete a product by updating the deleted field to true (soft delete)
export const deleteProduct = async (id) => {
  try {
    await setDoc(doc(db, 'products', id), { deleted: true }, { merge: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// This function is used to delete a product permanently from the database
export const deleteProductPermanently = async (id) => {
  try {
    await deleteDoc(doc(db, 'products', id));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    await updateDoc(doc(db, 'products', id), product);
  } catch (error) {
    console.error(error);
    throw error;
  }
};