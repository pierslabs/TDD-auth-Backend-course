import express, { Request, Response } from "express";

const httpServer = express();

httpServer.use(express.json());

httpServer.get("/", (_: Request, res: Response) => {
  res.status(200).json({ message: "Wellcome to TDD auth-service" });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
