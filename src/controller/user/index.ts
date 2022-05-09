import { registerModel } from "../../models/user";
import { User } from "../../interface/user/user.interface";
import bcrypt from "bcrypt";
import { STATUS_RESPONSE } from "../../constants/status-response.constants";

/**
 * signup controller send data to signupModel
 */
export const signup = async (req: any, res: any) => {
    const { body } = req;
    const { password, ...userPayload } = body as User;
    try {
        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        const encodedPassword = await bcrypt.hash(password ?? "", salt);
        await registerModel({
            ...userPayload,
            password: encodedPassword,
        });
        res.status(200).json({
            ...STATUS_RESPONSE.user.userRegistered,
        });
    } catch (error) {
        res.status(500).json({
            ...STATUS_RESPONSE.global.serverError,
        });
    }
};
