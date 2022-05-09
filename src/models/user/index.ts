import UserModel from '../../schema/user';
import { User, UserLogin, UserRegister } from '../../interface/user/user.interface';
import { ObjectId } from 'mongodb';
/**
 * Create user
 * @param payload User
 * @returns {Object} schema referenced User
 */
export const registerModel = (payload: UserRegister): User => {
    const userModel = new UserModel(payload)
    return userModel.save({email: 1, fullName: 1, _id: 1})
}

/**
 * Get user by email
 * @param payload type UserLogin
 * @returns {Object} schema referenced User
 */
export const getUserByEmail = async (payload: UserLogin): Promise<User | null> => {
    return await UserModel.findOne<User>({email: payload.email}).exec()
}

export const updateUserById = async (_id: string, payload: User): Promise<void> => {
    await UserModel.findOneAndUpdate({_id }, {...payload}).exec()
}