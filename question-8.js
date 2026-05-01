// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
//ให้ Fetch ข้อมูล User จาก Server ของ Jsonplaceholder ด้วย Built-in fetch Function
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data) => {
    //จากนั้น ให้แปลงโครงสร้างข้อมูลที่ได้จาก Server ให้เป็น Array ของชื่อ User แล้วเก็บไว้ใน Variable ชื่อว่า newUsers
    const newUsers = data.map((user)=>user.name)
    console.log(newUsers)
}).catch((error)=> {
    console.error("เกิดข้อผิดพลาด", error);
});

