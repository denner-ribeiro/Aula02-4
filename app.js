import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';

// Função de conexão com o banco
(async () => {
  try {
    // Conectar ao MongoDB pelo Mongoose
    await mongoose.connect(
      'mongodb+srv://igtiuser:12345@bootcamp.mmz96.mongodb.net/grades?retryWrites=true&w=majority',
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

app.listen(3000, () => console.log('API Iniciada'));
