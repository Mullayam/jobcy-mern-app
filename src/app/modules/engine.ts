import { google } from "googleapis";
import { AuthProviders, AuthProvidersKeys, AuthProvidersList, AuthProvidersScopes } from "../../types/index.js";


export class Engine {

    /**
     * Returns the specific provider object based on the given AuthProvidersList.
     *
     * @param {AuthProvidersList} authProvider - The AuthProvidersList to retrieve the provider object from.
     * @return {AuthProviders} The provider object corresponding to the given authProvider, or undefined if not found.
     */
    private Providers(authProvider: AuthProvidersList): AuthProviders {
        const Provider: AuthProviders = {
            "google": {
                clientID: "string" || process.env.GOOGLE_CLIENT_ID,
                clientSecret: "string" || process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "string" || process.env.GOOGLE_CALLBACK,
            }
        }
        return Provider[authProvider as keyof typeof Provider]

    }
    /**
     * Generates the appropriate authentication scopes for the given authentication provider.
     *
     * @param {AuthProvidersList} authProvider - The authentication provider for which to generate scopes.
     * @return {string[]} The array of authentication scopes for the specified provider.
     */
    private AuthScopes(authProvider: AuthProvidersList): string[] {
        const scopes: AuthProvidersScopes = {
            "google": [
                "https://www.googleapis.com/auth/userinfo.profile",
                "https://www.googleapis.com/auth/userinfo.email",
            ],
            // "facebook": [],  add scopes to provider array

        }
        authProvider = authProvider.toLowerCase() as AuthProvidersList
        return scopes[authProvider as keyof typeof scopes]
    }
    /**
     * Generates the Google authentication URL.
     *
     * @return {string} The generated Google authentication URL.
     */
    private GoogleAuth(): string {
        const GetProvider = this.Providers("google") as AuthProvidersKeys
        const oauth2Client = new google.auth.OAuth2(
            GetProvider.clientID,
            GetProvider.clientSecret,
            GetProvider.callbackURL
        );
        const scopes = this.AuthScopes("google")
        const googleURL = oauth2Client.generateAuthUrl({
            access_type: "offline",
            scope: scopes,
        });
        return googleURL
    }

    /**
     * Retrieves a specific authentication provider based on its name.
     *
     * @param {AuthProvidersList} name - The name of the authentication provider.
     * @return {any} The specific authentication provider.
     */
    public static get(name: AuthProvidersList):any {
        if (name === "google") {
            return this.prototype.GoogleAuth()            
        }
        // add your own fields
    }

}