// services/userService.js
const { user } = require("../models"); // import user mddel
const { sequelize } = require("../models/index");
const bcrypt = require("bcryptjs");

exports.getAllUsers = async () => {
    return await user.findAll();
};

exports.getSingleUser = async (userId) => {
    return await user.findByPk(userId);
};

exports.createUser = async (userData) => {
    try {
        // hash password
        if (userData.password) {
            userData.password_hash = await bcrypt.hash(userData.password, 10);
            delete userData.password;
        }

        const newUser = await user.create(userData);

        return newUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.updateUser = async (userId, userData) => {
    const userToUpdate = await user.findByPk(userId);

    if (!userToUpdate) {
        return null; // user not found
    }

    // if password is being updated, hash the new password
    if (userData.password) {
        userData.password_hash = await bcrypt.hash(userData.password, 10);
        delete userData.password; // remove originalpassword from userData object
    }

    // update user
    await userToUpdate.update(userData);
    return userToUpdate;
};

exports.deleteUser = async (userId) => {
    const userToDelete = await user.findByPk(userId);

    if (!userToDelete) {
        return false; //user not found
    }

    await userToDelete.destroy();
    return true;
};
