import mongoose, { Schema, model } from 'mongoose';

const mongoUrl: string = 'mongodb://mongo:27017/myDatabase';

mongoose.connect(mongoUrl).then(()=>console.log("MongoDb connectedd"))
.catch(err=>console.error("MongoDb connection error",err));

interface IUser{
    name:string;
    age:number;
    email:string;
}

const UserSchema:Schema=new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true }
})

export const User=model <IUser>('User',UserSchema);