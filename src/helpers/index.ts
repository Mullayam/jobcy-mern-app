import * as crypto from "crypto"
import moment from "moment";
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
    StringToNumber(str: string) {

    }
    QueryToObject(query: string) {
        let NewObject = {}
        query.split("&").map(item => {
            const [key, value] = item.split("=")
            Object.assign(NewObject, Object.fromEntries([[key, value]]))
            return Object.fromEntries([[key, value]])
        })

        return NewObject
    }
    ConvertDateWordsToDate(str: string): string {
        let newDate;
        if (str === "Latest") {
            newDate = moment().subtract(10, 'minutes').toDate();
        } else if (str === "LastHour") {
            newDate = moment().subtract(1, 'hour').toDate();
        }
        else if (str === "Last24hour") {
            newDate = moment().subtract(24, 'hour').toDate();
        }
        else {
            const number = str.replace(/[^0-9]/g, '')
            newDate = moment().subtract(number, `days`).toDate();
        }

        const date = this.SimpleDateStr(newDate)
        return date
    }
    SimpleDateStr(newDate: Date = new Date()): string {
        const newDateStr = newDate.toISOString().split("T")
        const date = (newDateStr[0] + " " + newDateStr[1].split(".")[0]).trim().toString()

        return date
    }
    purifyString(str: string): string {
        return str
            .toLowerCase()
            .trim()
            .replace(/\s/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
    ObjectKeysAndValues = (obj: string): string[] => {
        let keys = Object.keys(JSON.parse(obj));
        const PureObject = keys.map((key) => {
            return JSON.parse(JSON.parse(obj)[key]);
        });
        return PureObject;
    }
    FormatSalary = (salary: number) => {
        return salary.toLocaleString("en-IN", { maximumFractionDigits: 0 });
    };



}
export default new Helpers()