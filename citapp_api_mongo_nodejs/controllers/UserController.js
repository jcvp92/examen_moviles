import User from '../models/UserModel';
let controller = {
    addUser: async (req, res) =>{
        console.log(req.body);
        const {username,password } = req.body;
        const newUser = new User({username,password});
        await newUser.save();
        return res.status(200).json({
            response: "User added successfully"
        });
    },
    getUserById: async (req,res) =>{
        const id = req.query.id;
        const user = await User.findById({_id: id});
        return res.status(200).json({user});
    },    
    getUser: async (req,res) =>{
        const username = req.body.username;        
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({user});    
        }else{
            return res.status(200).json({user});  
        }
    },
    validateUser: async (req,res) =>{
        const username = req.body.username;        
        const password = req.body.password;        
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({
                response: "Username and password are invalid"
            });    
        }else{
            if(password == user.password){
                return res.status(200).json({user});                  
            }else{
                return res.status(404).json({
                    response: "Username and password are invalid"
                });                
            }
        }
    },
    listUsers: async (req,res) =>{
        const users = await User.find({});
        return res.status(200).json({users});
    },
    updateUser: async (req,res) =>{
        const {id,username,password} = req.body;
        await User.findByIdAndUpdate(id,{username, password});
        return res.status(200).json({
            response: "User updated successfully"
        });
    },
    deleteUser: async (req,res) =>{
        const {id} = req.body;
        await User.findByIdAndDelete(id);
        return res.status(200).json({
            response: "User deleted successfully"
        });
    },
}

module.exports = controller;