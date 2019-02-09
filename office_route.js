const express = require('express');
const Users = require('./office');

const p = new Users();
const userRouter = express.Router();
//const userRouters = express.Router();

userRouter.get('/', (req, res) => {
res.json(p.getUsers());
});

userRouter.get('/:id', (req, res) => {
let id = req.params.id;
res.json(p.getUsersb(id));
});

userRouter.post('/', (req, res) => {
  let {office_type, office_name} = req.body;

  p.addUser(office_type, office_name);

  if (office_type === undefined) {
res.status(404).json({ error: 'office name is missing!' });
    return;
  }

    res.status(200).json({ info: 'office added Successfully!' });
});


userRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  let { office_type, office_name } = req.body;
  p.updateUser(id, office_type, office_name);
  res.status(200).json({ info: 'Office modified successfully!' });
});

userRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  p.deleteUser(id);

  res.status(200).json({ info: 'office deleted successfully!' });
});

module.exports = userRouter;
