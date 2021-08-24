"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sampleController_1 = require("../controllers/sampleController");
var router = express_1.Router();
var sampleController = new sampleController_1.SampleController();
router.post('/sample', sampleController.registry);
exports.default = router;
