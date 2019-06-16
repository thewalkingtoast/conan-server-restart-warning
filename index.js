let shell = require("shelljs");
let request = require("request");
let param = process.argv[2];
let messageDetails;

if (param !== "now") {
    messageDetails = "in " + param + " minutes.";
} else {
    messageDetails = param + ".";
}

let message =  "Server restarts " + messageDetails;
let discordPayload = { content: message };

request({
    url: "",
    method: "POST",
    json: true,
    body: discordPayload
}, function() {
    console.log("fin");
});

// Assumes the following are set in the environment
// MCRCON_HOST
// MCRCON_PORT
// MCRCON_PASS
shell.exec('mcrcon "broadcast ' + message + '"');
