import bcrypt from "bcrypt";
import { getUserByEmail, updateUserById } from "../../models/user";
import { STATUS_RESPONSE } from "../../constants/status-response.constants";
import { SessionLogin } from "../../interface/session/session.interface";
import { createToken } from "../../utils/token.utils";
/**
 * Login user
 * @return {Object reponse}
 */
export const login = async (req: any, res: any) => {
    const { body } = req;
    const { email, password } = body;
    try {
        const infoUserAttempLogin = await getUserByEmail({ email });

        if (infoUserAttempLogin) {
            const matchPassword = bcrypt.compareSync(
                password,
                infoUserAttempLogin.password
            );
            if (matchPassword) {
                // Create token when the match password client and storeage were success
                const token = createToken<SessionLogin>({
                    payload: infoUserAttempLogin,
                    secretKey: process.env.SECRET_TOKEN_KEY ?? "",
                });

                // Save current token
                infoUserAttempLogin.token = token;
                await updateUserById(
                    infoUserAttempLogin._id,
                    infoUserAttempLogin
                );

                res.status(200).json({
                    data: {
                        token,
                    },
                    ...STATUS_RESPONSE.session.userLoginSuccess,
                });
            } else {
                res.status(401).json(STATUS_RESPONSE.session.userUnauthorized);
            }
        } else {
            res.status(400).json(STATUS_RESPONSE.session.userNotFound);
        }
    } catch (error) {
        res.status(500).send(STATUS_RESPONSE.global.serverError);
    }
};
