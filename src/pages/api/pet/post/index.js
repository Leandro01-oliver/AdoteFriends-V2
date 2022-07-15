import db from "../../Config/connectingMysql"

export default function handlerPost(req, res){

    try{

        if(req.method == "POST"){

            let imgPet = req.body.ImgPet;
            let namePet = req.body.NamePet;
            let descPet = req.body.DescricaoPet;

            let data = new Date();

            const sql = `INSERT INTO tb_pet (img_pet, name_pet, desc_pet, date_pet)  VALUES (?,?,?,?)`;
    
            db.query(sql,[imgPet,namePet,descPet,data],(err,data)=>{
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