import { google } from "googleapis";
export const oauth2Client = new google.auth.OAuth2(" AppConfig.OAUTH.GOOGLE_CLIENT_ID", "AppConfig.OAUTH.GOOGLE_CLIENT_SECRET", "AppConfig.OAUTH.GOOGLE_CALLBACK");
const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
];
export const googleURL = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
});
