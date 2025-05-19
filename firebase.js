const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Save task
function saveToFirestore(task) {
  db.collection("tasks")
    .add(task)
    .then(() => console.log("✅ Task saved"))
    .catch((err) => console.error("Error saving:", err));
}

// Load tasks
function loadTasksFromFirestore(callback) {
  db.collection("tasks").onSnapshot((snapshot) => {
    const data = [];
    snapshot.forEach((doc) => {
      data.push({ firestoreId: doc.id, ...doc.data() });
    });
    callback(data);
  });
}

// Update task
function updateTaskInFirestore(id, updates) {
  db.collection("tasks")
    .doc(id)
    .update(updates)
    .then(() => console.log("✅ Task updated"))
    .catch((err) => console.error("Update failed:", err));
}

// Delete task
function deleteTaskFromFirestore(id) {
  db.collection("tasks")
    .doc(id)
    .delete()
    .then(() => console.log("🗑️ Task deleted"))
    .catch((err) => console.error("Delete failed:", err));
}
