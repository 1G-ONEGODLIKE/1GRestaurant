const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

// Set the view engine to ejs
app.set("view engine", "ejs");
// Set the serving static files in the express in a directory named public
app.use(express.static("public"));
// Use bodyParser for URL encoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'ptpofficialxd',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // update the cookie option based on your needs
}));

// Connect to 1G Database
const db = mongoose.connection;
mongoose.connect("mongodb://0.0.0.0:27017/1G", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Verify database connection
db.on("error", () => console.log("Error in connecting to database"));
db.once("open", () => console.log("Connected to 1G Database"));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Define user model
const user = mongoose.model('user', userSchema);

// Define Menu Item Schema
const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    required: true
  }
});

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
const Store = mongoose.model('Store', StoreSchema);
module.exports = { MenuItem, Store };

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (request, response) => {
  try {
    const email = request.body.email;
    const password = request.body.password;
    db.collection("users").findOne({ email: email }, (err, user) => {
      if (user == null) {
        return response.send("<script>alert('Invalid account information! To gain access to the application, Please signup first.'); location.href='login'</script>");
      } else if (err) {
        throw err;
      } else if (user.password !== password) {
        return response.send("<script>alert('The Email or password you entered is incorrect! Please try again.'); location.href='login';</script>");
      } else {
        // set user data in session
        request.session.user = user;
        return response.send("<script>alert('You have successfully logged in.'); location.href='home'</script>");
      }
    });
  } catch (error) {
    return response.send("<script>alert('Error! Please try again later.');</script>");
  }
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/signup-success", (req, res) => {
  res.render("signup-success");
});

app.post("/signup", async (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const password = request.body.password;
  // Check if email already exists in the database
  const existingUser = await user.findOne({ email: email });
  if (existingUser) {
    return response.status(400).send("<script>alert('This email has already been registered! Please try again.'); location.href='signup';</script>");
  }
  if (password.length < 6) {
    return response.status(400).send("<script>alert('Password must be at least 6 characters long! Please try again.'); location.href='signup';</script>");
  }
  const data = {
    name: name,
    email: email,
    password: password,
  };
  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Account Inserted Successfully");
  });
  return response.redirect("signup-success");
});

app.get("/home", (req, res) => {
  const user = req.session.user;
  // check if user is authenticated
  if (!user) {
    return res.redirect("/login");
  }
  // render the home page with the user data
  res.render("home", { user });
});

app.get("/location", (req, res) => {
  const user = req.session.user;
  // check if user is authenticated
  if (!user) {
    return res.redirect("/login");
  }
  // render the home page with the user data
  res.render("location", { user });
});

app.get("/message", (req, res) => {
  const user = req.session.user;
  // check if user is authenticated
  if (!user) {
    return res.redirect("/login");
  }
  // render the home page with the user data
  res.render("message", { user });
});

app.get("/profile", (req, res) => {
  const user = req.session.user;
  // check if user is authenticated
  if (!user) {
    return res.redirect("/login");
  }
  // render the home page with the user data
  res.render("profile", { user });
});

// Set the server port to 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});