import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

export const loginUser = async (data) => {
  const { email, password } = data;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: { code: error.code, message: error.message } };
  }
};


export const registerUser = async (data) => {
  const { email, password } = data;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: { code: error.code, message: error.message } };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: { code: error.code, message: error.message } };
  }
};
