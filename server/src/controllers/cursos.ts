import express,{Request,Response} from 'express'
import Curso from '../models/curso'



export const getCursos = async (req:Request, res:Response)=>{

    const listCursos = await Curso.findAll()

    res.json(listCursos)

}

export const getCurso = async(req:Request, res:Response)=>{

    const{id}=req.params;
    const curso = await Curso.findByPk(id)
    if(curso){
    res.json(curso)

    }else {
        res.status(404).json({
            msg: `no existe tu curso papu con el id ${id}`
        });
    }
}

export const deleteCurso = async (req:Request, res:Response)=>{

    const{id}=req.params;
    const curso = await Curso.findByPk(id)

    if(!curso){
        res.status(404).json({
            msg: `no existe tu curso papu con el id ${id}`
        });

    }else{
        await curso.destroy()
        res.json({
            msg: ` El curso se elimino, Esto nunca paso Wasauski`
        });
    }
    

}

export const postCurso =async (req:Request, res:Response)=>{

    const{body}=req;

    try {
        await Curso.create(body);
        res.json({
        msg: `Tu curso se agrego `
    });

        
    } catch (error) {
        console.log(error);
        res.json({
            msg: ` ERROR POR PENDEJO`
        }); 
    }
    
}

export const updateCurso =async (req:Request, res:Response)=>{

    const{body}=req;
    const{id}=req.params;

   try {
    const curso = await Curso.findByPk(id);

    if(curso){
       await curso.update(body);
       res.status(404).json({
        msg: `Curso Actualizado Correctamente`
    })
    }else{
        res.status(404).json({
            msg: `no existe tu curso papu con el id ${id}`
        });
    }
    
   } catch (error) {
    console.log(error);
    res.json({
        msg: ` ERROR POR PENDEJO`
    }); 
    
   }

   
}