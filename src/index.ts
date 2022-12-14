import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.post("/getLibraryData", (req: Request, res: Response) => {
    res.send("Hello, World! Library Data!");
});

app.post("/getMealData", (req: Request, res: Response) => {
    res.send("Hello, World! Meal Data!");
});

app.post("/getNoticeData", (req: Request, res: Response) => {
    res.send("Hello, World! Notice Data!");
});

app.post("/getScheduleData", (req: Request, res: Response) => {
    res.send("Hello, World! Schedule Data!");
});

app.listen(8080, () => {
    console.log("Server is Listening on Port 8080!");
});