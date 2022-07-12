import db from "../../Config/connectingMysql"

export default function handlerPost(req, res){

    try{

        if(req.method == "POST"){

            let nome = req.body.nome;
            let email = req.body.email;
            let password = req.body.password;
            let nameImg = req.body.imagemName;

            const sql = `INSERT INTO informacao (nome, email, pwd, img_nome)  VALUES (?,?,?,?)`;
    
            db.query(sql,[nome,email,password,nameImg],(err,data)=>{
                if (err) {
                    console.log(err);
                    return
                }
                res.status(200).json(data)
            })
    
        }

    }catch(err){
        res.status(500).send({ error: 'failed to fetch data' })
    }

}