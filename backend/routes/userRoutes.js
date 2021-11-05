import express from "express";
import User from "../models/userModel.js";
import { getToken, isAuth } from '../util';

const router = express.Router();

//AUTORIZACION
router.put('/:id', isAuth, async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: getToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});

router.get(
  '/:id', (async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

// INGRESAR 
router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "invanid email or password" });
  }
});


//REGISTRAR USUARIO
router.post("/register", async (req, res) => {
 try{
   const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin:req.body.isAdmin,
  });

  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(400).send({ message: 'Invalid User Data.' });
  
};
}catch(error) {
    res.status(400).send({msg: error.message });
    console.log(error);
  };
});

//ELIMINAR USER
router.delete('/:id', isAuth, async (req, res) => {
  const deletedUser = await User.findById(req.params.id);
  if (deletedUser) {
    if (deletedUser.email === 'admin@example.com'|| deletedUser.isAdmin ===true) {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
    }
      const deleteUser = await User.deleteOne();
      res.send({ message: 'User Deleted', user: deleteUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  });
 //LISTA DE USUARIOS
 router.get( '/', isAuth, async (req, res) => {
    const users = await User.find({});
    res.send(users);
  }
);

//ADMINISTRADOR
router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "carolina",
      email: "ingricarolina1998@gmail.com",
      password: "123456",
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;
