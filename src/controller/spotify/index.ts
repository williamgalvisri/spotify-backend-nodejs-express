import spotifyWebApi from "spotify-web-api-node";
import { STATUS_RESPONSE } from "../../constants/status-response.constants";

const credentialsPayload = {
    clientId: process.env.SPOTIFY_CLIENT_ID ?? "",
    clientSecret: process.env.SPOTIFY_CLIENT_SECRETE ?? "",
    redirectUri: process.env.WEB_APP_URL_REDIRECT_URI,
};
let spotifyApi = new spotifyWebApi(credentialsPayload);

export const loginSpotify = async (req: any, res: any) => {
    const { code } = req.body;
    try {
        // Get acces token from instance spotify api
        const response = await spotifyApi.authorizationCodeGrant(code);
        
        res.status(200).json({
            accessToken: response.body.access_token,
            expireIn: response.body.expires_in,
            code
        }) 
    } catch (error) {
        res.status(400).json({...STATUS_RESPONSE.session.userUnauthorized})
    }
};


export const refreshTokenSpotify = async (req: any, res: any) => {
    const { code } = req.body;
    try {
        const response = await spotifyApi.authorizationCodeGrant(code);
        res.status(200).json({
            accessToken: response.body.refresh_token,
            expireIn: response.body.expires_in,
            code
        }) 
    } catch (error) {
        res.status(400).json({...STATUS_RESPONSE.session.userUnauthorized})
    }
}
