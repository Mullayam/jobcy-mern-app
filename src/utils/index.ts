import bcrypt from "bcryptjs";
import {CacheService} from '../app/modules/cache.js'
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

class Utils {
    /**
     * Hashes a password string.
     *
     * @param {string} PasswordStr - The password string to be hashed.
     * @return {string} The hashed password.
     */
    HashPassword(PasswordStr: string): string {
        return bcrypt.hashSync(PasswordStr, salt);
    }
    /**
     * Compare two passwords and return a boolean indicating if they match.
     *
     * @param {string} HashedPassword - The hashed password to compare.
     * @param {string} Password - The password to compare.
     * @return {boolean} Returns true if the passwords match, false otherwise.
     */
    ComparePassword(HashedPassword: string, Password: string): boolean {
        return bcrypt.compareSync(Password, HashedPassword);

    }
    /**
     * Generates a unique user ID.
     *
     * @return {string} The generated user ID.
     */
    CreateUserID(): string {
        const id = Math.floor(Math.random() * 10000000).toString()
        return id
    }  
    /**
     * Generates a random number within a specified range.
     *
     * @param {number} min - The minimum value of the range (default: 100000).
     * @param {number} max - The maximum value of the range (default: 999999).
     * @return {number} - The randomly generated number.
     */
    Random(min: number = 100000, max: number = 999999): number {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }
    FromCache(key: string): any {
        
        CacheService.set(key, "hello")
        return 
    }
}
export default new Utils()