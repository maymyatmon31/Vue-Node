const db = require("../../database/models/index");
const User = db.User;

const allUserLists = async (req, res) => {
    try {
        const users = await User.findAll({});
        console.log(users)
        res.json({
            status: true,
            data: users
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: false,
            error: error
        })
    }
}
const selectedUser =async(req,res) =>{
    try{
        const selected=await User.findByPk(18);
        console.log(selected);
        res.json({
            status:true,
            data: selected
        })
    }catch(error){
        console.log(error)
        res.json({
            status:false,
            error:error
        })
    }
}

const findUser =async(req,res) =>{
    try{
        const findmail=await User.findOne({ where: { email: 'maymyat1234@gmail.com' } });
        console.log(findmail);
        res.json({
            status:true,
            data: findmail
        })
    }catch(error){
        console.log(error)
        res.json({
            status:false,
            error:error
        })
    }
}
module.exports = {
    allUserLists,selectedUser,findUser
}