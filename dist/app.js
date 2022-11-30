"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const User = zod_1.z.object({
    username: zod_1.z.string(),
});
console.log(User.parse({ username: 12 }));
const dataSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
            invalid_type_error: "String is a type"
        }),
        number: zod_1.z.number({
            required_error: "Number is required",
            invalid_type_error: "Number is a type"
        })
    }),
});
const validate = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
app.get("/", (req, res) => {
    return res.json({ message: "Validation with Zod" });
});
app.post("/create", validate(dataSchema), (req, res) => {
    return res.json(Object.assign({}, req.body));
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