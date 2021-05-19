const router = require("express").Router()
const PetModel = require("../models/Pet.model")
const isAuthenticated = require("../middlewares/isAuthenticated");

// Register the Pet
router.post("/pet-register", isAuthenticated, async (req, res) => {
    console.log(req.body);
    try {
    console.log(req.body);

        const createPet = await PetModel.create(req.body)

        return res.status(201).json(createPet);
    } catch(err) {
        console.error(err)
        return res.status(500).json({ msg: JSON.stringify(err) });
    }
})

// cRud (READ) - HTTP GET
// Search all the Pets
router.get("/pet", async (req, res) => {
    try{

        const findPet = await PetModel.find()

        console.log(findPet)

        if (findPet) {
            return res.status(200).json(findPet);
        } else {
            return res.status(404).json({ msg: "Pet not found." });
        }
    } catch(err){
        console.error(err)
        return res.status(500).json({ msg: JSON.stringify(err) });
    }
})

// Delete the Pet
router.delete("/pet/:id", async (req, res) => {
    try{

        const { id } = req.params;

        const deletePet = await PetModel.deleteOne({ _id: id });

        // If the search has not found results, return 404
        if (deletePet.n === 0) {
            return res.status(404).json({ msg: "Pet not found." });
        }

        // By convention, in exclusions we return an empty object to describe the success
        return res.status(200).json({});
    } catch (err){
        console.error(err)
        return res.status(500).json({ msg: JSON.stringify(err) });
    }
})
module.exports = router;