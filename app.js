// Imports
import express from 'express';
import mongoose from 'mongoose';
// faz a injeção das variáveis do arquivo .env
require('dotenv').config();

import { studentRouter } from './routes/studentRouter.js';

// Função de conexão com o banco mongoDB
(async () => {
  try {
    // Conectar ao MongoDB pelo Mongoose
    // Utilizando variáveis de ambiente para definir informações críticas
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.mmz96.mongodb.net/grades?retryWrites=true&w=majority'`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('Conectado ao MongoDB com sucesso');
  } catch (error) {
    console.log('Erro ao conectar' + error);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API Iniciada'));
