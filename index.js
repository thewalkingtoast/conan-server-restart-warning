let shell = require("shelljs");
let request = require("request");
let param = process.argv[2];
let message =  "Server restarts in " + param + " minutes.";
let discordPayload = { content: message };

request({
    url: "https://discordapp.com/api/webhooks/589935785441099792/gaXQ8CQ1cEwcJ2-mx9tAulIxXTgXzeBpIZ9IJLq2tefZEZmdTwZbjK0WZzVdboyXiXXB",
    method: "POST",
    json: true,
    body: discordPayload
}, function() {
    console.log("fin");
});

shell.exec('mcrcon "broadcast ' + message + '"');
