// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(cart) {
  // เริ่มเขียนโค้ดตรงนี้
  // ใช้ for of loop เพื่อวนผ่าน obj ทุกตัวใน arr
  // เริ่มต้นราคารวมเป็น0
  let totalPrice = 0;
  for (let item of cart) {
    // คำนวณราคาของสินค้า (ราคา*จำนวน)
    const sum = item.price * item.quantity;
    
    // ราคารวมสะสมบวกตามรอบ loop จนครบ
   totalPrice += sum;
 
  }
 return totalPrice;
}



// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
