//LOCALS

//PACKAGES
const { google } = require("googleapis");
import path from "path";

//KEYS
const googleAuthKeys = require(path.resolve(
  process.cwd(),
  "service_account.json"
)); //The structure of the private key does not parse well when imported from .env

const getNewTokensV1 = (jwtClient: any) => {
  //authorize gets and then sets the token within the Client
  jwtClient.authorize((err: any, token: any) => {
    if (err) {
      console.log("Error authorizing JWT Client");
    } else {
      console.log("JWT Auth successfull!");
    }
  });
};

const getServiceAccountClient = () => {
  const apiScopes = ["https://www.googleapis.com/auth/calendar"]; //what apis we will be manipulating

  //provide client credentials
  const googleJwtClient = new google.auth.JWT(
    googleAuthKeys.client_email,
    null,
    googleAuthKeys.private_key,
    apiScopes
  );

  //NOTE_service accounts DO NOT utilize refresh tokens hence we always request a new access token.
  getNewTokensV1(googleJwtClient);
  return googleJwtClient;
};

export default getServiceAccountClient;
