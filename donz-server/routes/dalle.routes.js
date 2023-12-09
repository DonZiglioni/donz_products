import express from 'express';
import * as dotenv from 'dotenv';

import { OpenAI } from 'openai'

dotenv.config()

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OAI_API_KEY
})


router.route('/').get((req, res) => {
    res.status(200).json({ message: "Don 2.0 MthFkr!" })
})


router.route('/').post(async (req, res) => {

    try {
        const { prompt } = req.body;
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })
        const image = response.data[0].b64_json;
        res.status(200).json({ photo: image })
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong, Please Try Again" })
        console.error(error);
    }

})

export default router;