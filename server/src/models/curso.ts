import db from "../db/connection";
import { DataType, DataTypes } from "sequelize";

const Curso = db.define('curso',{
   dia:{
        type:DataTypes.STRING
   },

   curso:{
    type:DataTypes.STRING
    },

    descripcion:{
        type:DataTypes.STRING
    },

   profesor:{
    type:DataTypes.STRING
   },

   hora:{
    type:DataTypes.STRING
    },

    inscritos:{
        type:DataTypes.NUMBER
   },


},{
    createdAt:false,
    updatedAt:false
})

export default Curso;