const userModels = require('../models/User.js')
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

/// Read api

const GetUser = async(req, res) => {
     try{
        const user = await userModels.find()
        if(!user){
            return res.status(404).json({success:false, message: "user not found"})
        }
        res.status(200).json({success:true, user})

     }catch(error) {
        console.log(error)
        return res.status(500).json({success:false, message:'Internal Server Error'})
     }
}

/////// Update User

const UpdateUser = async(req, res) => {
    try{
       const UserId = req.params.id
        const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body,{new:true})
        if(!updatedUser){
            return res.status(404).json({success:false, message:'User not found'})
        }
         res.status(200).json({success:true, message:'User Updated Successfully', updatedUser})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false, message:'Internal Server Error'})

    }

}





// export {Createuser}
module.exports = {Createuser, GetUser, UpdateUser}