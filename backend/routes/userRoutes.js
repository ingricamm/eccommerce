import  express  from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.get("/createadmin", async (req, res) => {
   try {
        const user = new User({
                name:'carolina',
                email:'ingricarolina1998qgmail.com',
                userName:'ingricamm',
                password:'123456',
                isAdmin:true,
        });
        const newUser = await user.save();
            res.send(newUser);

       
   } catch(error){
    res.send({msg: error.message})
   }
  });

  export default router