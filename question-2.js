// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
//เพิ่ม Task ใหม่
userTaskList[4] ={ id: 5, task: "Walk the dog" }
console.log(userTaskList)
//แก้ไขชื่อ Task ที่มี id เป็น 4
userTaskList[3].task = "Go to the gym"
console.log(userTaskList)
//ลบ Task สุดท้ายที่อยู่ใน Array ออก
userTaskList.pop()
console.log(userTaskList)
//แสดงผล "Task id: 4, Go to the gym"
console.log(`"Task id: ${userTaskList[3].id}, ${userTaskList[3].task}"`);