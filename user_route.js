const express = require('express');
const Users = require('./users');

const p = new Users();
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
res.json(p.getUsers());
});

userRouter.get('/:id', (req, res) => {
let id = req.params.id;
res.json(p.getUsersb(id));
}); 

userRouter.post('/', (req, res) => {
  let {first_name, last_name, other_name, emails, phone_Number, passport_Url, Yes_or_No} = req.body;

  p.addUser(first_name, last_name, other_name, emails, phone_Number, passport_Url, Yes_or_No);

  if (first_name === undefined) {
res.status(404).json({ error: 'first name is missing!' });
    return;
  }

    res.status(200).json({ info: 'User added Successfully!' });
});


userRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  let { first_name, last_name, other_name, emails, phone_Number, passport_Url, Yes_or_No } = req.body;
  p.updateUser(id, first_name, last_name, other_name, emails, phone_Number, passport_Url, Yes_or_No);
  res.status(200).json({ info: 'User modified successfully!' });
});

userRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  p.deleteUser(id);

  res.status(200).json({ info: 'User deleted successfully!' });
});

module.exports = userRouter;
