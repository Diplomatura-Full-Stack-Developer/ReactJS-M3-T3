# Diplomatura en Profesional Full-Stack Developer

## Curso de Desarrollo en ReactJS - Profesor: Gabriel Alberini

### Modulo 3 - Integración de base de datos

### Unidad 2 - Firebase - Parte II

#### Tarea 2 - Mi primer CRUD con Firestore

#### Tarea 2 - Objetivo:

Aplicar las operaciones CRUD (**Create, Read, Update, Delete**) con Firestore,
comprendiendo cuándo y cómo usar addDoc(), setDoc(), updateDoc() y deleteDoc(),
así como el uso de lecturas en tiempo real.


### Como ejecutar la tarea:

1. Clonar el repositorio:
```bash
git clone https://github.com/Diplomatura-Full-Stack-Developer/ReactJS-M3-T2.git

```

2. Instalar las dependencias:
```bash
npm install
```

3. Crear un archivo `.env`  copia de `.env.template` en la raíz del proyecto.
```bash
cp .env.template .env
```

4. Agregar las variables de entorno en el archivo `.env`:
```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

5. Ejecutar el comando que prepara la aplicación para ser desplegada en Firebase:
```bash
npm run build
```

6. Crear un proyecto en Firebase.


7. Iniciar el proyecto de Firebase:
```bash
firebase login
```

8. Ejecutar el comando: firebase init hosting
```bash
firebase init hosting
```

9. Ejecutar el comando: firebase deploy
```bash
firebase deploy --only hosting
```

### Configuración de Firebase:

Dentro de la aplicación se crea la carpeta `firebase` en la carpeta `src` del proyecto y se agregan el archivo de configuración de Firebase.

`config.js`
```js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

```

### Proyecto desplegado en Firebase:

Después de ejecutar todos los pasos correspondientes, Firebase despliega la aplicación en una URL, que en el caso de mi proyecto es la siguiente:

<!-- https://app-routes-724de.web.app/ -->



### Recursos utilizados en la tarea:

- Firebase (https://firebase.google.com/)
- React (https://react.dev/)
- React Router (https://reactrouter.com/home)
- React Icons (https://react-icons.github.io/react-icons/)
- SweetAlert2 (https://sweetalert2.github.io/)

### Alumno: Rubén Seco

### Comisión: 181752


location db = nam5 (us-central1)









