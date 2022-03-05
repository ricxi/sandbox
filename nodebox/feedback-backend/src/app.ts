import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Feedback } from "./types";

import FeedbackData from "./data/FeedbackData";

const PORT: number = 3333;

const app: Express = express();
app.use(express.json());
app.use(cors());

let feedback: Feedback[] = FeedbackData;

app.get("/feedback", (req: Request, res: Response) => {
  return res.json(feedback);
});

app.post("/feedback", (req: Request, res: Response) => {
  const item: Feedback = req.body;
  feedback = [item, ...feedback];
  return res.status(200).json(item);
});

app.delete("/feedback/:id", (req: Request<{ id: "string" }>, res: Response) => {
  const itemId = req.params.id;
  const itemIdx = feedback.findIndex((item) => item.id === itemId);

  // negative index means item was not found
  if (itemIdx === -1) return res.status(404).send("item does not exist");
  feedback = feedback.filter((item) => item.id !== itemId);
  res.status(200).send();
});

app.put("/feedback/:id", (req: Request, res: Response) => {
  const itemId = req.params.id;
  const itemIdx = feedback.findIndex((item) => item.id === itemId);
  if (itemIdx === -1) return res.status(404).send("item does not exist");

  const updatedItem: Feedback = req.body;
  feedback = feedback.map((item) => (item.id === itemId ? updatedItem : item));
  // maybe implement logic to determine if feedback text was updated or not

  return res.status(200).json(updatedItem);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
