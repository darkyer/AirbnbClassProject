const { getAllUsers, getOneUser } = require('../../services/UserService');

const getUsers = async() => {
    const users = await getAllUsers();
    console.log(users);
    return users;
};

const getSingleUser =  async(_,params) => {
    const user = await getOneUser(params.id);
    if (!user) throw new Error('User not exist');
    return user;
};

const me = async(root,params,{user}) => {
    const varUser = await getOneUser(user._id);
    return varUser;
};

module.exports = {
    getUsers,
    getSingleUser,
    me
};