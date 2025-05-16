// เพิ่ม task ลง Firestore
function addTask() {
  const taskInput = document.getElementById("todoInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  db.collection("todos")
    .add({
      text: taskText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      taskInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding task: ", error);
    });
}

// โหลด task แบบ real-time
function loadTasks() {
  db.collection("todos")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      const todoList = document.getElementById("todoList");
      todoList.innerHTML = "";

      snapshot.forEach((doc) => {
        const data = doc.data();
        const li = document.createElement("li");
        li.textContent = data.text;

        const span = document.createElement("span");
        span.textContent = "❌";
        span.onclick = () => deleteTask(doc.id);

        li.appendChild(span);
        todoList.appendChild(li);
      });
    });
}

// ลบ task
function deleteTask(id) {
  db.collection("todos")
    .doc(id)
    .delete()
    .catch((error) => {
      console.error("Error deleting task: ", error);
    });
}

// โหลดเมื่อเริ่มหน้า
window.onload = loadTasks;
