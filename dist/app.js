"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zodUtils = __importStar(require("./utils/zodUtils"));
const app = (0, express_1.default)();
const utilsZod = zodUtils.zod;
app.use(express_1.default.json());
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
    });
});
const start = () => {
    try {
        app.listen(3333, () => {
            console.log("Server started on port 3333");
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=app.js.map