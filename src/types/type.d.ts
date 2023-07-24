import { DatabaseEntityValues } from "@enjoys/presql/src/interface/config.js";
import {NodemailerExpressHandlebarsOptions} from 'nodemailer-express-handlebars'

import { JwtPayload } from "jsonwebtoken";

interface UserInfoJwtPayload {
    id?: string,
    email?: string,
    role?: string,
    status?: string,
}
export interface LoginResponse {
    Token: string
    RefreshToken: string
}
export interface MailOptionsInterface{
    from?: string;
    to: string | string[];
    cc?: string | string[];
    bcc?: string | string[];
    subject: string;
    text?: string;
    html: string;
}
export interface IUser {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    residence: string;
    avatar: string;
    email: string;
    password: string;
    role: IRole;
    isEmailVerified: boolean;
    isProfileCompleted: boolean;
}
type IRole={}
export type IResponse<Res> = {
    message: string;
    data: {
         
    };
};
declare global {
    namespace Jwt {
        export interface JwtPayload {
            [key: UserInfoJwtPayload]: string
        }
    }
    
    
} 