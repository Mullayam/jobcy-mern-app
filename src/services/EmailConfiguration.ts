import nodemailer from 'nodemailer'

import { MailOptionsInterface } from '../types/index.js';
import Logging from '../logging/Logging.js';

export default class MailService {
    private static instance: MailService;
    private transporter!: nodemailer.Transporter;
    constructor() {
        this.createConnection()
    }
    //VERIFY CONNECTION
    private async verifyConnection() {
        return this.transporter.verify();
    }

    //CREATE A CONNECTION FOR LIVE
    private async createConnection() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,

            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    }
    private getTransporter() {
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
    async SendEmail(requestId: string | number | string[], options: MailOptionsInterface) {
        return await this.transporter
            .sendMail({
                from: `${process.env.SENDER_NAME as string} <${process.env.MAIL_USER as string}>`, // sender address
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
            })
            .then((info) => {
                console.log(info)
                Logging.info(`${requestId} - Mail sent successfully!!`);
                Logging.info(`${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`);
                if (process.env.NODE_ENV === 'local') {
                    Logging.info(`${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(
                        info
                    )}`);
                }
                return info;
            });
    }
    /**
     * Sends a template mail using the provided options.
     *
     * @param {string | number | string[]} requestId - The ID of the request.
     * @param {MailOptionsInterface} options - The options for the mail.
     * @return {Promise<any>} - A promise that resolves to the information about the sent mail.
     */
    async TemplateMail({ to, subject, html, text, from }: MailOptionsInterface): Promise<any> {
        return await this.transporter
            .sendMail({
                from: `${from || process.env.SENDER_NAME as string} <${process.env.MAIL_USER as string}>`, // sender address
                to,
                subject,
                text,
                html,
            })
            .then((info) => {
                Logging.info(` Mail sent successfully to ${to} [MailResponse]=${info.response} [MessageID]=${info.messageId}!!`);

                return info;
            });
    }


}