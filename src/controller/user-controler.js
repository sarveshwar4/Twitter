import {UserService} from "../services/index.js";
const userService = new UserService();
const create = async(req, res)=>{
    try {
        const response = await userService.create(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:'user is created Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    }
   
};

const signIn = async(req, res) =>{
    try {
        const response = await userService.signIn(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:'user is loggedIn Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    }
}

const deleteUser = async(req, res)=>{
    try {
        const response = await userService.delete(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'User is deleted Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    }

};

const getALl = async(req, res)=>{
    try {
        const response = await userService.getAll();
        return res.status(200).json({
            data:response,
            success:true,
            message:'User is fetched Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    }    
}
const get = async(req, res)=>{
    try {
        const response = await userService.get(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'User is fetched Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    }    
}
export default {
    create,
    deleteUser,
    getALl,
    get,
    signIn
  };
