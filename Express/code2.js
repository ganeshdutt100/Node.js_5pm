const express = require("express");
const app = express();

// let users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",

//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",

//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
// ];

const products = [
  { id: 1, name: "phone", price: 40000 },
  { id: 2, name: "laptop", price: 50000 },
  { id: 3, name: "Bike", price: 200000 },
];

// app.get("/user/:id", (req, res) => {
//   //   res.send(req.params.id);
//   const userId = parseInt(req.params.id);
//   const user = users.find((u) => u.id === userId);

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send("User not find ❌");
//   }
// });
// app.get("/", (req, res) => {
//   res.send("i am home code2 page ");
// });

// app.get("/user/:id", (req, res) => {
//   res.send(`user id is ${req.params.id}`);
// });
// app.get("/user/:id/:name", (req, res) => {
//   res.send(`user id is ${req.params.id} and name is ${req.params.name}`);
// });

app.get("/products", (req, res) => {
  const { price } = req.query;
  if (price) {
    const output = products.filter((p) => p.price <= price);
    res.json(output);
  } else {
    res.json(products);
  }
});

app.get("/search", (req, res) => {
  res.send(req.query);
});

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000 `);
});
//req.params = {id :"5"}
//localhost:3000/search?product=latop&price=40000

// req.query.product;
// req.query.price;
