import express, { Request, Response, NextFunction } from "express";
import {express_validateMultiLevel, express_validateSingleLevel} from "./utils/validator"
import {zodtestModelMultiLevel, zodtestModelSingleLevel} from "./models/zodtestModel"


const app = express();

app.use(express.json());




app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Validation with Zod" });
});


app.post("/zodTestSingleLevel",
  express_validateSingleLevel(zodtestModelSingleLevel),
  (req: Request, res: Response): Response => {
    return res.json({ ...req.body });
  }
);

app.post("/zodTestMultimercedesLevel",
express_validateMultiLevel(zodtestModelMultiLevel),
  (req: Request, res: Response): Response => {
    return res.json({ ...req.body });
  }
);


const start = (): void => {
  try {
    app.listen(3333, () => {
      console.log("Server started on port 3333");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();