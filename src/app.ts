import express, { Request, Response, NextFunction } from "express";
import  * as zodUtils  from "./utils/zodUtils"


const app = express();
const utilsZod = zodUtils.zod
app.use(express.json());

const fullnameSchema = utilsZod.string();
const ageSchema = utilsZod.string();
const dataSchema = utilsZod.object({
  username: utilsZod.string(),
  password: utilsZod.string()
});

app.get('/test', (req, res) => {
  const fullName = "Kiss Pista";
  const age = 12;
  const data = { username: "Test", password: "asda2123" };

  const stringValid = zodUtils.zodValidator(fullName, fullnameSchema);
  const numberValid = zodUtils.zodValidator(age, ageSchema);
  const objValid = zodUtils.zodValidator(data, dataSchema);
  //----------------------------------------------------
  const stringValiderr = zodUtils.zodValidator(age, fullnameSchema);
  const numberValiderr = zodUtils.zodValidator(data, ageSchema);
  const objValiderr = zodUtils.zodValidator(fullName, dataSchema);

  res.status(200).json({
    succes: {
      string: stringValid,
      num: numberValid,
      obj: objValid
    },
  //----------------------------------------------------
    error: {
      string: stringValiderr,
      num: numberValiderr,
      obj: objValiderr
    }
  })
})


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