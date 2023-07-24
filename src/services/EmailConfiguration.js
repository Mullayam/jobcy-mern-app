var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nodemailer from 'nodemailer';
import Logging from '../logging/Logging.js';
export default class MailService {
    constructor() {
        this.createConnection();
    }
    //VERIFY CONNECTION
    verifyConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.transporter.verify();
        });
    }
    //CREATE A CONNECTION FOR LIVE
    createConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                },
            });
        });
    }
    getTransporter() {
        return this.transporter;
    }
    //INSTANCE CREATE FOR MAIL
    static getInstance() {
        if (!MailService.instance) {
            MailService.instance = new MailService();
        }
        return MailService.instance;
    }
    //SEND MAIL
    SendEmail(requestId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transporter
                .sendMail({
                from: `${process.env.SENDER_NAME} <${process.env.MAIL_USER}>`,
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
            })
                .then((info) => {
                console.log(info);
                Logging.info(`${requestId} - Mail sent successfully!!`);
                Logging.info(`${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`);
                if (process.env.NODE_ENV === 'local') {
                    Logging.info(`${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(info)}`);
                }
                return info;
            });
        });
    }
    TemplateMail(requestId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transporter
                .sendMail({
                from: `${process.env.SENDER_NAME} <${process.env.MAIL_USER}>`,
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
            })
                .then((info) => {
                console.log(info);
                Logging.info(`${requestId} - Mail sent successfully!!`);
                Logging.info(`${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`);
                if (process.env.NODE_ENV === 'local') {
                    Logging.info(`${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(info)}`);
                }
                return info;
            });
        });
    }
}
