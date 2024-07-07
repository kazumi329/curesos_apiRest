"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursos_1 = require("../controllers/cursos");
const router = (0, express_1.Router)();
router.get('/', cursos_1.getCursos);
router.get('/:id', cursos_1.getCurso);
router.delete('/:id', cursos_1.deleteCurso);
router.post('/', cursos_1.postCurso);
router.put('/:id', cursos_1.updateCurso);
exports.default = router;
