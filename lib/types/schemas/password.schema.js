"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.password = void 0;
const Joi = require("joi");
const password = (type) => {
    const types = [
        {
            type: 'user',
            schema: Joi.string().min(8).max(16)
        },
        {
            type: 'smtp',
            schema: Joi.string().min(8).max(16)
        }
    ];
    return types.filter(h => h.type === type).slice().shift().schema;
};
exports.password = password;
