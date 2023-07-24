import * as crypto from "crypto";
export let Tokens = new Map();
export let BlacklistedTokens = [];
class Helpers {
    generateToken(byteLength = 48) {
        return crypto.randomBytes(byteLength).toString("base64");
    }
    CreateRefreshToken(byteLength = 32) {
        return crypto.randomBytes(byteLength).toString("base64");
    }
    RequestId(byteLength = 16) {
        return crypto.randomBytes(byteLength).toString("base64");
    }
    HandleRefreshToken(id) {
        const RefreshToken = this.CreateRefreshToken();
        Tokens.set(id, RefreshToken);
        return RefreshToken;
    }
}
export default new Helpers();
