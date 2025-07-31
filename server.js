const express = require("express")
const app = express()
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

app.use(express.json())

let products = [
    { id: 1 ,name: "ปากกา",price: 25, stock: 100},
    { id: 2 ,name: "ยางลบ",price: 40, stock: 80},
    { id: 3 ,name: "ดินสอ",price: 8, stock: 200},
    { id: 4 ,name: "สีเทียน",price: 90, stock: 50},
];

// GET
app.get("/api/products",(req, res) => {
    res.json(products);
});

//เรียกตาม id
app.get("/api/products/:id" ,(req, res) => {
    //array.find()
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if(product){
        res.json(product);
    } else {
        res.status(404).send("Product not found");   
    }
});

//POST
app.post("/api/products" ,(req, res) => {
    const newProduct = {
        id: products.length > 0? Math.max(...products.map(p => p.id ))+1 : 1,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    };
    products.push(newProduct)
    res.status(201).json(newProduct)
});

//Put
app.put("/api/products/:id" ,(req, res) => {
    const id = parseInt(req.params.id)
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex !== -1 ) {
        const updatedProduct = { ...products[productIndex], ...req.body };
        products[productIndex] = updatedProduct;
        res.json(updatedProduct);
    } else {
        res.status(404).send("Product not found");
    }
});

//DELETE
app.delete("/api/products/:id" ,(req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);

    if(products.length < initialLength) {
        res.status(204),send();
    } else {
        res.status(404).send("Product not found");
    }

});

app.listen(PORT, () => {
    console.log(`Server is runnig on "http://localhost:${PORT}/"`);
});