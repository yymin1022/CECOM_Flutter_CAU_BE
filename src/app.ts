import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.post("/getMealData", (req: Request, res: Response) => {
    res.send("Hello, World! Meal Data!");
})

app.listen(8080, () => {
    console.log("Server is Listening on Port 8080!");
});