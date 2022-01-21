const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// const MongoDBStore = require("connect-mongodb-session")(session);

// const store = new MongoDBStore({
//   uri: process.env.MONGODB_URI || "mongodb://localhost/pantry-power",
//   collection: "sessions",
// });

// store.on("error", function (error) {
//   console.log(error);
// });

// const sessionOptions = {
//   secret: process.env.SESSION_SECRET || "this is a secret",
//   cookie: {},
//   resave: false,
//   saveUnitialized: true,
//   store,
// };

// app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pantry-power",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
