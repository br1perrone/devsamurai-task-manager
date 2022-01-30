import bcrypt from "bcryptjs";
import User from '../models/user';

const hasRole = (currentAdmin = null, roles) => {
    return currentAdmin && [roles].includes(currentAdmin.role);
}

export const createPasswordHash = async (password) => {
    return await bcrypt.hash(password, 8);
}

export const checkPassword = (user, password) => {
    return bcrypt.compare(password, user.password_hash);
}

export const hasAdminPermission = (currentAdmin = null) => {
    return hasRole(currentAdmin, ['admin']);
}

export const hasManagerPermission = (currentAdmin = null) => {
    return hasRole(currentAdmin, ['admin', 'manager']);
}

export const hasDeveloperPermission = (currentAdmin = null) => {
    return hasRole(currentAdmin, ['admin', 'manager', 'developer']);
}

export const checkAuthenticate = async (email, password) => {
    const user = await User.findOne({ where: {email} });

    if (user && (await user.checkPassword(password))) {
        return user;
    }

    return false;
}