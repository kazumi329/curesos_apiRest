"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Curso = connection_1.default.define('curso', {
    dia: {
        type: sequelize_1.DataTypes.STRING
    },
    curso: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    profesor: {
        type: sequelize_1.DataTypes.STRING
    },
    hora: {
        type: sequelize_1.DataTypes.STRING
    },
    inscritos: {
        type: sequelize_1.DataTypes.NUMBER
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Curso;
