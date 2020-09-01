import mongoose from 'mongoose';

// criação do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
    // Valida se a nota inserida e menor que zero
    // validate(value) {
    //   if (value < 0) {
    //     throw new Error('Valor negativo para a nota não permitido');
    //   }
    // },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
  writeConcern: {
    j: true,
    wtimeout: 1000,
  },
});

// definindo o modelo da coleção
// por padrão o mongoose cria as collections no plural, então para forçar a utilização
// no singular é passado o nome 'student' como terceiro parametro
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
