const express = require("express");

const app = express();

const adminRoutes = require("./routes/addmin");
const shopRoutes = require("./routes/shop")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/add-product", (req, res) => {
    console.log("Add Product Page");
    res.send(`<form><input type="text" name="title"><button type="submit"> Add Product Page</button></form>`);
});

app.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;