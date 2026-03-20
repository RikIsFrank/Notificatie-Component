"use strict";

function decodeAndValidate(jwt)
{
    // console.log("jwt", jwt);

    if (!jwt || jwt === "null") return "401";
    if (!jwt.startsWith("Bearer ")) return "401";

    jwt = jwt.replace("Bearer ", "");
    let parts = jwt.split(".");
    if (parts.length !== 3) return "401";

    let header = parts[0]
    let payload = parts[1]
    let sig = parts[2];

    // console.log("header", header);
    // console.log("payload", jwt);
    // console.log("sig", sig);

    let decoded;
    try {
        decoded = String(new java.lang.String(
            java.util.Base64.getDecoder().decode(payload)
        ));
    } catch (e) {
        return "401";
    }

    // console.log("decoded", decoded);

    let claims = {};
    claims.iss = undefined;
    claims.iat = undefined;
    claims.client_id = undefined;
    claims.user_id = undefined;
    claims.user_representation = undefined;

    try {
        claims = JSON.parse(decoded);
        if (!claims.iss || !claims.iat || !claims.client_id ) return "401";
        if (claims.iss !== claims.client_id) return "401";
    } catch (e) {
        return "401";
    }

    // console.log("claims cid", claims.client_id);

    // add logic to check time limit on iat (issued at timestamp)

    return JSON.stringify({ status: "200", clientId: claims.client_id });
}

function verifyHmac(jwt, secretJson) {

    console.log("jwt", jwt);
    console.log("secretJson", secretJson);

    if (!jwt || jwt === "null") return "401";
    if (!secretJson) return "401";

    // more logica - doing this later

    return "200";
    // return JSON.stringify({ status: "401", clientId: null });
}