const users = [
    {id: 1, name: 'John' , email: "john.sn@gmail.com"},
    {id: 2, name: 'Mary' , email: "mary.ja@gmail.com"},
    {id: 3, name: 'Clark' , email: "clark.ke@gmail.com"},
    {id: 4, name: 'Somsri' , email: "somsri.33@gmail.com"},
];

console.log("------------");
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
console.log("------------");
for (const user of users){
    console.log(user.name);
}
console.log("------------");
users.forEach((user) => {
    console.log(user.name);
});
console.log("------------");
const userNames = users.map((user) => user.name);
console.log(userNames);

const products =[
    {name: 'ข้าวมันไก่', price: 20, quanlity: 15},
    {name: 'ข้าวขาหมู', price: 50,quanlity: 12},
    {name: 'สบู๊', price: 8,quanlity: 60 },
    {name: 'PS5', price: 119,quanlity: 5},
];


console.log("------------");
const cheapItems = products.filter((item)=> item.price < 50);
console.log(cheapItems);

let totalprice = 0
for(const product of products){
    totalprice += product.price * product.quanlity
}
console.log(`มูลค่ารวมคือ ${totalprice} บาท`);

totalprice = products.reduce((total, product)=>{
    return total + product.price * product.quanlity;
},25);
console.log(`อีกที,มูลค่ารวมคือ ${totalprice} บาท`);

console.log("------------");
const findItem = products.find((item) => item.name === "PS5");
console.log(findItem);

console.log("------------");
const sortItem = products.sort((a,b)=> a.price - b. price);
console.log(sortItem);

console.log("------------");
const someOne = products.some((product) => product.quanlity < 5);
console.log(someOne);
const everyOne =products.every(product => product.quanlity > 10);
console.log(everyOne);

console.log("------------");
const highProducts = products
.filter((product) => product.price > 10)    
.sort((a,b) => b.quanlity - a.quanlity)
.map((product) => product.name)

console.log(highProducts);
