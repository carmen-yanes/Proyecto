const Register = require ("../models/Register");

const insert =( req,res)=>{

    const student = new Register(req.body);
    student .save((error, documents)=>{
        if(error)
        return res.status(500).json({
            msg:"Hubo un error"
        });
        return res.status(201).json({
            msg:"creado",
            register: documents
        })
    });
}

const getRegister = (req, res) =>{
    Register.find({}, (error, documents)=>{
       if(error)
        res.status(500).json({
            msg:"Hubo un error"
        });
        return res.status(200).json({
            msg:"ok",
            registers: documents
        });
    });
};
const getOneRegister =(req, res)=>{
    Register.find({id :req.params.id}, (error, documents)=>{
        if(error)
         res.status(500).json({
             msg:"Hubo un error"
         });
         return res.status(200).json({
             msg:"ok",
             registers: documents
         });
     });
};

module.exports ={
    getRegister,
    getOneRegister,
    insert
};
