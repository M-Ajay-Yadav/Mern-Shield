const jwt = require("jsonwebtoken");
const userData = require("../models/user-model");
const User = require("../models/user-model");

const authMiddleware = async (req, res , next ) => {
 const token = req.header("Authorization");

 if(!token){
    return res
    .status(401)
    .json({message:"unauthorized HTTP, Token not provided"});
 }
 
 const jwtToken = await token.replace("Bearer", "").trim();
 try {

    const isverified =  jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
    const userData = await User.findOne({email:isverified.email}).select({
        password:0,
        phone:0,
    });
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.UserId = userData._id;

     next()
    
 } catch (error) {
   return res
    .status(400)
    .json({message:"unauthorized HTTP, Token not provided"});
    
 }
}

module.exports = authMiddleware;