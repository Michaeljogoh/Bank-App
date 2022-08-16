const client = require('../services/db');



const createAccount = async ({account_id , account_name , account_balance}) =>{
 const newAccount = await client.query(`INSERT INTO account values ($1 , $2 , $3)` , [account_id , account_name , account_balance])
 if(newAccount){
    return res.status(200).json({newAccount})
 }
 return res.status(400).json({error:'Account not created'})


}

const deposit = async (req , res) =>{}

const withDraw = () =>{}

const tranfer = () =>{}


module.exports = {createAccount , deposit , withDraw , tranfer}


