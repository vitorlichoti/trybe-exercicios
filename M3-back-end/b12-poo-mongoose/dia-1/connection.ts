import { connect, Schema, model } from "mongoose";

const options = {
  user: 'user', // Usuário do banco de dados.
  pass: 'password', // senha do usuário do banco de dados.
  dbName: 'trixDB', // Define qual banco de dados você irá utilizar.
};

connect('mongodb://localhost:27017/', options);


const petSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: false },
  weight: { type: Number, required: true },
  dailyMealsNumber: { type: Number, required: true, min: 2, max: 5 },
});

const Pet = model('Pet', petSchema);