import users from '../data/userData';

const userController={
    getUsers(req,res){
        return res.status(200).send(users);
    }
}
export default userController;