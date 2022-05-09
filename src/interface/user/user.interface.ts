export interface User {
    _id: string;
    fullName: string;
    email: string;
    password: string;
    token?: string;
}

export type UserRegister = Omit<User, '_id'>;
export type UserLogin = Pick<User, 'email'>;