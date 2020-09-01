import express from 'express';

import { studentModel } from '../models/studentModel.js';

const app = express();

// CREATE
app.post('/student', async (req, res) => {
  try {
    // Crio o obejto studentModel
    const student = new studentModel(req.body);
    // Salvo o objeto na base de dados
    await student.save();
    // Retorno o objeto criado
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// RETRIEVE
app.get('/student', async (req, res) => {
  try {
    const students = await studentModel.find({});

    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE
app.patch('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Faz a pesquisa pelo id, faz a atualização dos dados
    // o new é para retornar o documento depois da atualização
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE
app.delete('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Faz a pesquisa pelo id, realiza a deleção do documento
    // o new é para retornar o documento depois da atualização
    const student = await studentModel.findByIdAndRemove({ _id: id });

    if (!student) {
      res.status(400).send('Documento não encontrado na coleção');
      return;
    }

    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE
app.put('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Faz a pesquisa pelo id, faz a atualização dos dados
    // o new é para retornar o documento depois da atualização
    const student = await studentModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { app as studentRouter };
