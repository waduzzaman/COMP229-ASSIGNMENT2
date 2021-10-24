"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../middleware/index"));
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get('/login', user_1.DisplayLoginPage);
router.post('/login', index_1.default.authenticate('login'), user_1.ProcessLoginPage);
router.get('/register', user_1.DisplayRegisterPage);
router.post('/register', user_1.ProcessRegisterPage);
router.get('/logout', user_1.ProcessLogout);
exports.default = router;
//# sourceMappingURL=user.js.map