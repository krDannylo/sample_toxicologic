"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
typeorm_1.createConnection();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(4000, function () { return console.log("Server is running.."); });
