const User = require("../model/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



//***   Register */
exports.register = async(req,res) =>{
   try {
       const { firstname , name , email , password} = req.body;
       
       const foundUser = await User.findOne({email})
       if(foundUser){
          return  res.status(400).send({errors: [{ msg : "Email already in use... Please try again."}]})
       }
       const saltRounds = 10;
       const hashedPassword = await bcrypt.hash(password, saltRounds )
       const newUser = new User({...req.body})
       newUser.password = hashedPassword;

       //save
       await newUser.save()

       //token
       const token = jwt.sign({
           id : newUser._id
       },
       process.env.SCRT_KEY,{expiresIn: "168h"}
       )
       res.status(200).send({ success : [{msg : "Registration successful..."}] , user : newUser , token})

   } catch (error) {
       res.status(400).send({ errors : [{ msg : "Registration unsuccessful..."}]})
   }
}






//**  Login */


exports.login = async(req,res) =>{
    try {
        const {email , password } = req.body ;
        
        //check email existance : 
        const foundUser = await User.findOne({email})
        if (!foundUser){
            return res.status(400).send({errors : [{ msg : "User or email not found."}]})
        }
        const checkPassword = await bcrypt.compare(password,  foundUser.password)
        if (!checkPassword){
        return res.status(400).send({errors : [{ msg : "Please check your password!!"}]})
    }
    const token = jwt.sign({
        id : foundUser._id,  isAdmin : foundUser.isAdmin 
    },
    process.env.SCRT_KEY,{expiresIn: "168h"}
    )
    res.status(200).send ({success : [{msg : "Welcome Back"}] , user : foundUser , token})



    } catch (error) {
        res.status(400).send({errors : [{ msg : "Unable to find user!!"}]})
        
    }
}


exports.updateInfos = async(req,res) =>{
    try {
        const{_id}= req.params;
        const { firstname , name , email }  = req.body;      

        const updatedUser = await User.findOneAndUpdate(req.params, {$set:{...req.body}})     
        
      
        const updateddUser = new User({...req.body})
      
        const token = jwt.sign({
            id : updatedUser._id,
        },
        process.env.SCRT_KEY,{expiresIn: "168h"}
        )
        
        await updatedUser.save()
        

        res.status(200).send({success : [{ msg : "Update successful..."}] , user : updatedUser, token })
        
    } catch (error) {
        res.status(400).send({ errors : [{ msg : "Unable to update... Please try again."}]})
    }
 }

 

 exports.updatePassword = async (req, res) => {
    const { oldPassword, password } = req.body;
    const{_id}= req.params;
    try {
      // get user
      const user = await User.findById(req.params);
      if (!user) {
          return res.status(400).send({ errors : [{ msg : 'User not found.' }]});
      }
  
      // validate old password
      const isValidPassword = await bcrypt.compare(oldPassword, user.password);
      if (!isValidPassword) {
          return res.status(400).send({ errors: [{ msg : "Please check your old password." }]})
      }
     
      // hash new password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // update user's password
      user.password = hashedPassword;
      

      const updatedUserPassword = await user.save();

      res.status(200).send({success : [{msg:"Update successful..."}] , user : updatedUserPassword })
  
     
    } catch (error) {
      return res.status(400).send({ errors : [{ msg :  "Please try again later." }]});
    }
  };


  exports.getusers = async (req,res) => {
    try {
        const listusers = await User.find();
        res.status(200).send({msg : 'Users list',listusers})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get all Users', error})
    }
  }


  exports.getOneUser = async (req,res) => {
    const{_id}= req.params;
   try{ 
    const userToGet = await User.findOne(req.params);
    res.status(200).send({msg : 'get user ',userToGet})
    
} catch (error) {
    res.status(400).send({msg : 'fail to get user ', error})
} }
