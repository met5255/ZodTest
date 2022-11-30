import express, { Request, Response, NextFunction } from "express";
import { z, AnyZodObject } from "zod";

const app = express();

app.use(express.json());




const dataSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error:"String is a type"
    }),
    number: z.number({
        required_error: "Number is required",
        invalid_type_error:"Number is a type"
      })
  }),
});

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Validation with Zod" });
});

app.post("/zodTest",
  validate(dataSchema),
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