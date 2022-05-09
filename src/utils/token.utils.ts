import jwt from "jsonwebtoken";

type CreateTokeType<T> = { payload: T; secretKey: string };

export const createToken = <T>({ payload, secretKey }: CreateTokeType<T>) => {
    return jwt.sign({ payload }, secretKey);
};
