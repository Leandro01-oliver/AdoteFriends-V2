import db from "../../Config/connectingMysql"

export default function handlerGet(req, res) {
    try {

      if(req.method == "GET"){
          
          const sql = 'SELECT * FROM informacao';

          db.query(sql,(err,data)=>{
                if (err) {
                    console.log(err);
                    return
                }
                res.status(200).json(data)

          })
          
      }

    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }