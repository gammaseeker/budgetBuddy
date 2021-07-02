"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = require("body-parser");
var index_1 = require("./src/routes/index");
var income_1 = __importDefault(require("./src/routes/income"));
// Create a new express app instance
var app = express_1.default();
// Enable CORS
app.use(cors_1.default());
// Parses incoming requests as JSON if parsable
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
// Associate router with application
app.use('/', index_1.router);
app.use('/api/income', income_1.default);
mongoose_1.default.connect('mongodb://127.0.0.1:27017/budgetbuddy', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function () {
    console.log('connected to db');
});
app.listen(3001, function () {
    console.log('App is listening on port 3001!');
});
