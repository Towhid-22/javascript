const products = [
  {
    id: 1,
    name: "Apple iphone 16",
    price: 1600,
    createdAt: Date("2023-10-14"),
  },
  {
    id: 2,
    name: "Samsung galaxy note 8",
    price: 1550,
    createdAt: Date("2023-10-15"),
  },
  { id: 3, name: "Motorola", price: 1500, createdAt: Date("2023-10-16") },
  { id: 3, name: "Motorola", price: 1200, createdAt: Date("2023-10-18") },
];
products.forEach((product, index) => {
  console.log("\n");
  console.log("Product id : ", index + 1);
  console.log("Product id : ", product.id);
  console.log("Product id : ", product.name);
  console.log("Product id : ", product.price);
  console.log("Product id : ", product.createdAt);
  console.log("\n");
});

const x = products.map((product, index) => {
  return product;
});
console.log(x[1]);
console.log("\n");

products.forEach((product) => {
  console.log(product.id + " " + product.name + " " + product.price);
});

let hasPrice = products.every((product) => product.price <= 1550);
console.log(hasPrice);

let ascending = products.sort((a, b)=>{
  // return a.price - b.price;
  return b.price - a.price;
});
console.log(ascending);


