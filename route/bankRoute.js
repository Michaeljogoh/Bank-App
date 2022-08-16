const express = require('express');
const app = express();
const router = express.Router();
const {createAccount , deposit , withdraw , tranfer , balance} = require('../controller/bankController');

router.get('/balance/:id', (req , res) =>{
    const account_id = req.params.id
    // balance(acId)
    balance(account_id, balance => {
        res.json({ balance })
    })
})


router.post('/create', (req , res)=>{
    createAccount(req.body, msg => {
        res.json({ 'sts' : 'success', msg })
    })

});

router.put('/transfer', (req , res)=>{
    tranfer(req.body, msg => {
        res.json({ 'sts' : 'success', msg })
    })

})

router.put('/withdraw', (req , res)=>{
    withdraw(req.body, msg => {
        res.json({ 'sts' : 'success', msg })
    })

});


router.put('/deposit', (req , res)=>{
    deposit(req.body, msg => {
        res.json({ 'sts' : 'success', msg })
    })

});




module.exports = router;