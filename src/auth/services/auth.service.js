import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

export const loginUser = async (data) => {
  const { email, password } = data;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuario logueado con éxito:', user.uid);
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error.code, error.message);
      throw error;
    });
};


export const registerUser = async (data) => {
  const { email, password } = data;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // The user has been registered and has logged in automatically
      const user = userCredential.user;
      console.log('Usuario creado con éxito:', user.uid);
      // Here you can redirect the user or show a success message
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Common error handling
      if (errorCode === 'auth/email-already-in-use') {
        alert('El correo ya está registrado.');
      } else if (errorCode === 'auth/weak-password') {
        alert('La contraseña es muy débil.');
      } else {
        console.error('Error al registrar:', errorMessage);
      }
    });
};

export const logoutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log('Usuario deslogueado con éxito');
    })
    .catch((error) => {
      console.error('Error al desloguear:', error.code, error.message);
      throw error;
    });
};
