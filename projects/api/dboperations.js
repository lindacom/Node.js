var config = require("./dbconfig");
const sql = require("mssql");
const Products = require("./Products");
const { response } = require("express");

// SECURITY -  CUSTOMERS LOGIN AND REGISTRATION

async function registerCustomers(CustomerName, email, password) {
  let newcust1 = CustomerName;
  let newcust2 = email;
  let newcust3 = password;

  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query(
        "INSERT INTO customers (CustomerName,email, password) VALUES ('" +
          newcust1 +
          "','" +
          newcust2 +
          "','" +
          newcust3 +
          "') "
      );

    return items.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function loginCustomers(CustomerName, email, password) {
  let newcust1 = CustomerName;
  let newcust2 = email;
  let newcust3 = password;

  //connect to the database using dbconfig
  let pool = await sql.connect(config);
  // execute query
  let items = await pool
    .request()
    .query("SELECT * from customers where email= '" + newcust2 + "'");

  return items.recordsets;

  //var user = items.recordsets;
  //return user;
}

// CUSTOMERS ACTIONS

async function getCustomers() {
  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let people = await pool.request().query("SELECT * from customers");
    // return recordset array
    return people.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getProducts() {
  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool.request().query("SELECT * from products");
    // return recordset array
    return items.recordsets;
    // let one = items.recordsets;
    // convert array to th object
    // const obj = Object.assign({}, one);
  } catch (error) {
    console.log(error);
  }
}

async function getProductName(item) {
  var search = item;
  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query(
        "SELECT * from products WHERE productName LIKE '%" + search + "%'"
      );
    // return recordset array
    return items.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getProductCategory(category) {
  var searchterm = JSON.stringify(category);
  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query("SELECT * from products WHERE category =  '" + searchterm + "'  ");
    // return recordset array
    return items.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getProductLikesfilter() {
  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query("SELECT * from products ORDER BY likes desc");
    // return recordset array
    return items.recordsets;
  } catch (error) {
    console.log(error);
  }
}

/*async function addProduct(newp1, newp2, newp3, newp4, newp5) {
  let newpr1 = newp1;
  let newpr2 = newp2;
  let newpr3 = newp3;
  let newpr4 = newp4;
  let newpr5 = newp5;

  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = `INSERT INTO products (productID, productName, productUrl, price, likes, category) VALUES (?,?,?,?,?,?)`;
    // let  items = await  pool.request().query("INSERT INTO products ( productName, productUrl, price, likes, category) VALUES ('" + newpr1  +  "','" + newpr2  +  "','" + newpr3  +  "','" + newpr4  +  "','" + newpr5  +  "') ");

    return items.recordsets;

    //  return recordset array
    // return items.recordsets;
    // let one = items.recordsets;
    // convert array to th object
    // const obj = Object.assign({}, one);
  } catch (error) {
    console.log(error);
  }
}*/

async function addProduct(newp1, newp2, newp3, newp4, newp5) {
  let newpr1 = newp1;
  let newpr2 = newp2;
  let newpr3 = newp3;
  let newpr4 = newp4;
  let newpr5 = newp5;

  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query(
        "INSERT INTO products ( productName, productUrl, price, likes, category) VALUES ('" +
          newpr1 +
          "','" +
          newpr2 +
          "','" +
          newpr3 +
          "','" +
          newpr4 +
          "','" +
          newpr5 +
          "') "
      );
    // return recordset array
    return items.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(newpa, newp1, newp2, newp3, newp4, newp5) {
  let newpra = newpa;
  let newpr1 = newp1;
  let newpr2 = newp2;
  let newpr3 = newp3;
  let newpr4 = newp4;
  let newpr5 = newp5;

  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query(
        "UPDATE products SET productName = '" +
          newpr1 +
          "', productUrl='" +
          newpr2 +
          "', price='" +
          newpr3 +
          "', likes='" +
          newpr4 +
          "', category='" +
          newpr5 +
          "' WHERE productID ='" +
          newpra +
          "'"
      );
    // return recordset array
    return items.recordsets;
    // let one = items.recordsets;
    // convert array to th object
    // const obj = Object.assign({}, one);
  } catch (error) {
    console.log(error);
  }
}

async function editProduct(newpa, newp1, newp2, newp3, newp4, newp5) {
  let newpra = newpa;
  let newpr1 = newp1;
  let newpr2 = newp2;
  let newpr3 = newp3;
  let newpr4 = newp4;
  let newpr5 = newp5;

  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query(
        "UPDATE products SET productName = '" +
          newpr1 +
          "', productUrl='" +
          newpr2 +
          "', price='" +
          newpr3 +
          "', likes='" +
          newpr4 +
          "', category='" +
          newpr5 +
          "' WHERE productID ='" +
          newpra +
          "'"
      );
    // return recordset array
    return items.recordsets;
    // let one = items.recordsets;
    // convert array to th object
    // const obj = Object.assign({}, one);
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(newpa) {
  let newpra = newpa;

  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query("DELETE FROM products WHERE productID = '" + newpra + "' ");
    // return recordset array
    return items.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCustomers: getCustomers,
  registerCustomers: registerCustomers,
  loginCustomers: loginCustomers,
  getProducts: getProducts,
  getProductName: getProductName,
  getProductCategory: getProductCategory,
  getProductLikesfilter: getProductLikesfilter,
  addProduct: addProduct,
  updateProduct: updateProduct,
  editProduct: editProduct,
  deleteProduct: deleteProduct,
};
