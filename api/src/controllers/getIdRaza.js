require("dotenv").config();
const {API_KEY} = process.env
const axios = require("axios");
const {Dog} = require("../db")

const getIdRaza =  async (req, res)=>{
    urlDogsAll = "https://api.thedogapi.com/v1/breeds"
    const {idRaza} = req.params
    
    try {
        const {data} = await axios(`${urlDogsAll}${API_KEY}`)

        

        res.status(200).json(data[idRaza])

    } catch (error) {
        res.status(404).json({error: error.message})
    }
    
}

module.exports= getIdRaza