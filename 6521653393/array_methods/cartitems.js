const products = [
  { id: 101, name: 'หูฟังบลูทูธ Sony', category: 'Electronics', price: 4590, stock: 15 },
  { id: 102, name: 'คีย์บอร์ด Mechanical', category: 'Electronics', price: 2800, stock: 8 },
  { id: 201, name: 'หนังสือ The Pragmatic Programmer', category: 'Books', price: 850, stock: 30 },
  { id: 202, name: 'หนังสือ Clean Code', category: 'Books', price: 799, stock: 0 }, // สินค้าหมด
  { id: 301, name: 'แก้วกาแฟ Starbucks', category: 'Lifestyle', price: 550, stock: 25 }
];

const user = {
  name: 'สมศักดิ์',
  shoppingCart: [
    { productId: 101, quantity: 1 },  //หูฟัง Sony 1 อัน
    { productId: 201, quantity: 2 }, 
    { productId: 102, quantity: 1 }, 
    { productId: 202, quantity: 1 }, 
  ],
};

function processOrder(customer, productList) {
    console.log("");
    console.log(`=== เริ่มสำรวจตระกร้า ${customer.name} ===`);

    const enrichedCart = customer.shoppingCart.map((item) => {
        const productDetails = productList.find((p) => p.id === item.productId);

        if (productDetails.stock < item.quantity) {
            console.log(`สินค้า "${productDetails.name}" ไม่พร้อมจำหน่าย (มี ${productDetails.stock}, ต้องการ ${item.quantity})`);
            return null;
        }

        return {
            ...productDetails,
            quantity: item.quantity,
            subtotal: productDetails.price * item.quantity
        };
    });

    // ✅ กรองสินค้าที่พร้อมขาย (ไม่ใช่ null)
    const availableItems = enrichedCart.filter(item => item !== null);

    // ✅ เรียงจากราคามาก → น้อย
    availableItems.sort((a, b) => b.subtotal - a.subtotal);

    // ✅ คำนวณราคารวม
    const totalPrice = availableItems.reduce((sum, item) => sum + item.subtotal, 0);

    // ✅ แสดงรายการ
    console.log("-------------------------------------------------");
    console.log("คำสั่งซื้อของคุณ:");
    availableItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} x ${item.quantity} | ราคา ${item.subtotal.toLocaleString()} บาท`);
    });
    console.log("-------------------------------------------------");
    console.log(`ราคารวมสุทธิ: ${totalPrice.toLocaleString()} บาท`);
    console.log("-------------------------------------------------");
}
processOrder(user, products);