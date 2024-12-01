import express,{Express,Request,Response} from 'express';

import {User} from './db';
const app=express();
const port=3000;

app.use(express.json());

app.post('/user',async(req:Request,res:Response)=>{
    const {name,age,email}=req.body;
    const newUser = new User({ name, age, email });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).send({ message: 'User created', user: savedUser });
    } catch (err) {
      res.status(500).send({ message: 'Error creating user', error: err });
}
});

app.get('/user',async(req:Request,res:Response)=>{
    try {
        const users=await User.find();
        res.status(200).send(users);

    } catch (err) {
        res.status(500).send({message:'Eror creating User',error:err})
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
