const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;

const uri =
  "mongodb+srv://wahaj:12341234@nexium-mongo.xhxltk4.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("*** Connected ***"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  ip_address: { type: String, required: true },
});

const Student = mongoose.model("Students", studentSchema);

app.get("/", (req, res) => res.send("Hello from Express!"));

app.get("/students", async (req, res) => {
  const result = await Student.find({});
  res.send(result);
});

app.get("/students/id/:id", async (req, res) => {
  const result = await Student.find({ id: Number(req.params.id) });
  res.send(result);
});

app.get("/students/gender/:gender", async (req, res) => {
  const result = await Student.find({ gender: req.params.gender });
  res.send(result);
});

app.post("/students", async (req, res) => {
  const data = {
    id: 111,
    first_name: "Wahaj",
    last_name: " Asif",
    email: "wahaj@gmail.com",
    gender: "Male",
    ip_address: "127.0.0.1",
  };
  const result = await Student.insertOne(data);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
