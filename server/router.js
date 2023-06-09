import express from "express";
const app = express();
const router = express.Router()
app.use(express.json());

router.post("/addComment", async(req, res) =>{

})

module.exports = router;