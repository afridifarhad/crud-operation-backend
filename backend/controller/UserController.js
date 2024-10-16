const UserModels = require('../models/User.js')


const Createuser = async(req, res) => {

    try{
           
    const {name, fathername, email, phone}= req.body

    const NewUser = new UserModels({
        name, fathername, email, phone
    })
    await NewUser.save()
    res.status(200).json({success:true, Message: 'User Create Successfully', NewUser})

    }catch(error){
        console.log(error)
        res.status(500).json({success:false, Message: 'Internal Server error', NewUser})
    }
}




// export {Createuser}
module.exports = Createuser