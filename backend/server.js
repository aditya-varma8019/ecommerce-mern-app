import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import cors from 'cors'

const app = express();


app.use(express.json({limit: "10mb"}));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

app.post('/signup', async (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));