const client = require('../services/db');



const createAccount = async ({account_id , account_name , account_balance}) =>{
 const newAccount = await client.query(`insert into account values ($1 , $2 , $3)` , [account_id , account_name , account_balance])
 if(newAccount){
    return res.status(200).json({newAccount})
 }
 return res.status(400).json({error:'Account not created'})


}

const deposit = async ({account_id , amount}) =>{
 const res =  await client.query(`select account_balance from  account where account_id = $1`, [account_id])
    const {account_balance} = parseFloat(res.rows[0].account_balance)
    const newBalance = account_balance + amount

    const currentBalance = await client.query(`update account set balance =$1 where account_id = $2`, [newBalance, account_id])

    if(currentBalance){
        return res.status(200).json(`Amount deposited ${amount} `)
    }
    return res.status(400)
}

const withdraw = async ({account_id , amount}) =>{
     await client.query(`select account_balance from  account where account_id = $1`, [account_id])
    const {account_balance} = parseFloat(res.rows[0].account_balance)
    const newBalance = account_balance - amount

    const currentBalance = await client.query(`update account set balance =$1 where account_id = $2`, [newBalance, account_id])

    if(currentBalance){
        return res.status(200).json(`Amount${amount} withdrawn`)
    }
    return res.status(400).json(`Insufficent balance ${amount}`)
}

const tranfer = ({source_id , destination_id , amount}) =>{
    withDraw({ account_id : source_id , amount })
     deposit ({ account_id : destination_id , amount})

}

const balance = async ({account_id}) =>{
   const newBalance =  await client.query(`select account_balance from  account where account_id = $1`, [account_id])
   if(newBalance){
    const {account_balance} = parseFloat(res.rows[0].account_balance)
    return res.status(200).json({account_balance})

   }
  

}


module.exports = {createAccount , deposit , withdraw , tranfer , balance}


