import express from "express";
const app = express();
import ToDoModel from "./db.js";

app.use(express.json()) //middleware

app.get("/", (req,res) => {
    res.json("hello there")    
})

app.post("/postToDo", async (req,res) => {
    const {title,description,markAsDone} = req.body
    console.log(title);
    console.log(description);
    try {
        await ToDoModel.create({
            title : title,
            description : description,
            markAsDone : markAsDone
        });
        
    } catch (error) {
        console.log("error aagya");
        console.log(error);

    }
    res.send("done successfully")
});

app.listen(3000,() => {
    console.log("hogya");
})

