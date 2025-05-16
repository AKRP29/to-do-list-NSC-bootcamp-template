const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};

// ฟังก์ชั่นเรียกใช้ Firebase service
firebase.initializeApp(firebaseConfig);

// ตัวแปร db เพื่อที่จะเรียกใช้งาน
const db = firebase.firestore();

// แชร์ตัวแปร db ให้ script.js ใช้งานได้
window.db = db;
