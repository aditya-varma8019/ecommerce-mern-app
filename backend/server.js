import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import cors from 'cors'

const app = express();


app.use(express.json({limit: "10mb"}));
app.use(cors());
dotenv.config();

// mongodb connection
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connect to Database"))
.catch(error => console.log(error))

// Schema

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    image: String
})

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    category: String,
    image: String,
    price: String,
    description: String
})

// model

const User = mongoose.model("User", UserSchema);

const Product = mongoose.model("Product", ProductSchema);


// api requests
const PORT = process.env.PORT || 5000;

app.post('/signup', async (req, res) => {
    // console.log(req.body);
    const {email} = req.body;

    const response = await User.findOne({email: email});

    

    if(response) {
        res.send({message: "Email Already Exists!", alert: false});
    }
    else {
        const data = new User(req.body);

        data.save();
        res.send({message: "Successfully Registered!", alert: true})
    }
})

// api login

app.post("/login", async (req,res) => {
    const {email, password} = req.body;

    const data = await User.findOne({email: email});

    if(data) {
        if(data.password === password) {
            res.send({message: "Logged In Successfully!", alert: true, data: data});
        }
        else {
            res.send({message: "Incorrect Password!", alert: false});
        }
    }
    else {
        res.send({message: "Email doesn't Exists!", alert: false});
    }
})

// api new product

app.post("/newproduct", async (req, res) => {
    const data = req.body;
    
    const response = await Product.findOne({name: data.name});

    if(response) {
        res.send({message: "Product With Same Name Already Exists!", alert: false});
    }
    else {
        const product = new Product(data);

        product.save();
        res.send({message: "Product Added Successfully!", alert: true});
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));