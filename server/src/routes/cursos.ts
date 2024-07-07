import { Router } from "express";
import { getCursos,getCurso, deleteCurso, postCurso, updateCurso } from "../controllers/cursos";

const router = Router();


router.get('/',getCursos)
router.get('/:id',getCurso)
router.delete('/:id',deleteCurso)
router.post('/', postCurso)
router.put('/:id',updateCurso)

export default router;