const fs = require("fs").promises;
const { readFile } = require("fs");
const path = require("path");
const { promisify } = require("util");
// const readFileAsync = promisify(fs.readFile);
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  async save() {
    // this.id = Math.random().toString();
    this.id = Date.now();
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    const data = await fs.readFile(p);
    let products = [];
    products = JSON.parse(data);
    products.push(this);
    fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
  }

  static async fetchAll() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    let data = await fs.readFile(p);
    return JSON.parse(data);
  }


  static async findById(id) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    try {
      const products = JSON.parse(await fs.readFile(p));
      const product = products.find( p => p.id == id);
      return product;
    } catch (error) {
      return error;
    }
  }
};
