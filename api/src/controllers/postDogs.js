const {Dog, Temperaments} = require("../db")

const postDogs = async (req, res)=>{
    const dog = req.body
    try {
        
    const [user, created] = await Dog.findOrCreate({
        where: {name: dog.name},
        defaults: {
            name: dog.name,
            image: dog.image,
            height: dog.height,
            weigth: dog.weigth,
            life_span: dog.life_span
        }
    })

    if (created) {
            await user.addTemperaments(dog.temperament);
          res.status(200).json("Dog creado exitosamente");
    } else {
        res.status(209).json("dog ya existe")
    }
       
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports= postDogs