const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Строка должна содержать как минимум 2 символа'],
    maxlength: [30, 'Строка не должна первышать 30 символов'],
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    required: true,
    minlength: [2, 'Строка должна содержать как минимум 2 символа'],
    maxlength: [30, 'Строка не должна первышать 30 символов'],
    default: 'Исследователь океана',
  },
  avatar: {
    type: String,
    required: true,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Пароль должен содержать минимум 8 символов'],
  },
});
module.exports = mongoose.model('user', userSchema);
