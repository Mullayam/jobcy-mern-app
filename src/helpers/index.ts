import * as crypto from "crypto"
export let Tokens = new Map();
export let BlacklistedTokens: string[] = [];
class Helpers {

    generateToken(byteLength: number = 48) {
        return crypto.randomBytes(byteLength).toString("base64")
    }
    CreateRefreshToken(byteLength: number = 32) {
        return crypto.randomBytes(byteLength).toString("base64")
    }
    RequestId(byteLength: number = 16) {
        return crypto.randomBytes(byteLength).toString("base64")
    }
    HandleRefreshToken(id: string) {
        const RefreshToken = this.CreateRefreshToken()
        Tokens.set(id, RefreshToken)
        return RefreshToken
    }
    QueryToObject(query: string) {
        let NewObject= {}
        query.split("&").map(item => {
            const [key, value] = item.split("=")
             Object.assign(NewObject, Object.fromEntries([[key, value]]))
            return Object.fromEntries([[key, value]])
        }) 
       
        return NewObject
    }


}
export default new Helpers()