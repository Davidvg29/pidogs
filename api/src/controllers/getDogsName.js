const axios = require("axios")
const {Dog, Temperaments} = require("../db")
const {Op} = require("sequelize")

const getDogsName = async (req, res)=>{
    const {name} = req.query
  try {
    const {data} = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
   

    const dogDB = await Dog.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
      }},
        include:{
            model: Temperaments,
            attributes:["name_temperament"],
            through:{
                attributes:[]
            }
        }
    
    })
  const dogsTotal=[...data, ...dogDB]

  if (dogsTotal.length>0) return res.status(200).json(dogsTotal)
     else return res.status(200).json(dogstotal=[{name:"raza inexistente"}])

  } catch (error) {
    res.status(500).json({error: error.mensaje})
  }

}
module.exports = getDogsName