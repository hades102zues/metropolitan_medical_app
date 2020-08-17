//google apis failed to provide a type declaration file

const { google } = require("googleapis");
import path from "path";

const googleAuthKeys = require("./service_account.json"); //api keys
const apiScopes = ["https://www.googleapis.com/auth/calendar.events"]; //what apis we will be manipulating

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
