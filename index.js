let shell = require("shelljs");
let request = require("request");
let param = process.argv[2];
let message =  "Server restarts in " + param + " minutes.";
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
