import Tratamiento from "../models/Tratamiento.js"
import mongoose from "mongoose"


const registrarTratamiento = async (req,res)=>{
    const {paciente} = req.body
    if( !mongoose.Types.ObjectId.isValid(paciente) ) return res.status(404).json({msg:`ID de paciente no válido`});
    await Tratamiento.create(req.body)
    res.status(200).json({msg:"Registro exitoso del tratamiento"})
}

const listarTratamiento = async (req,res)=>{
    const tratamientos = await Tratamiento.find()
    res.status(200).json(tratamientos)
}

const eliminarTratamiento = async (req,res)=>{
    const {id} =req.params
    if( !mongoose.Types.ObjectId.isValid(id) ){
        return res.status(400).json({error:'ID de tratamiento no exite'})
    }
    await Tratamiento.findByIdAndDelete(id)
    res.status(200).json({msg:"Tratamiento eliminado correctamente"})
}

export{
    registrarTratamiento,
    listarTratamiento,
    eliminarTratamiento
}