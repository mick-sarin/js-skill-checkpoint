// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity=200
console.log(inventory)
inventory.orange = { price: 20, quantity: 300 }
console.log(inventory)

//คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
let totalValue = 0;

for (let item in inventory) {
  const price = inventory[item].price; //เข้าถึงค่า price
  const quantity = inventory[item].quantity; //เข้าถึงค่า quantity
  
  totalValue += price * quantity; //totalValue + สะสมค่าในแต่ละloop
}

// Log มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
console.log("Total inventory value: " + totalValue + " baht")
console.log(`Total inventory value: ${totalValue} baht`);

