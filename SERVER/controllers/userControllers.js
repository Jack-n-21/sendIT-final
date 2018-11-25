import users from '../data/userdata';

const userController={
    getUsers(req,res){
        return res.status(200).send(users);
    }
}
export default userController;