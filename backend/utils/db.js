// import mongoose from "mongoose";

 const  mongoose = require("mongoose")
const dbCon = async () => {
    try{
       await mongoose.connect(process.env.DB_URL)
        console.log("database is connected")

    }catch(error){
          console.log(error)
    }
}
// export default dbCon
module.exports = dbCon;