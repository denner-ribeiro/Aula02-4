import mongoose from 'mongoose';

// criação do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
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
});

// definindo o modelo da coleção
// por padrão o mongoose cria as collections no plural, então para forçar a utilização
// no singular é passado o nome 'student' como terceiro parametro
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
