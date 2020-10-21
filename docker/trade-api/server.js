var sleep = require('system-sleep');
const { Logger } = require('aws-cloudwatch-logs')
const AWS = require('aws-sdk');
const createLogger = require('aws-cloudwatch-logs');
const HTTP = require('http');

console.clear();

var cloudwatchlogs = new AWS.CloudWatchLogs({
    apiVersion: '2014-03-28',
    region: 'eu-central-1'
});

var defaultLogger = createLogger({
    cloudwatchlogs: cloudwatchlogs,
    logGroupName: '/trade-api/default-logs'   // Don't forget to create LogGroups: /API/endpoints or it will fail!
});
var errorLogger = createLogger({
    cloudwatchlogs: cloudwatchlogs,
    logGroupName: '/trade-api/error-logs'      // Don't forget to create LogGroups: /api/errors or it will fail!
});

infoLog("server started...");
var server = HTTP.Server();
server.listen(8080, "localhost", processRequests);

function infoLog(msg) {
    defaultLogger.log("INFO", msg);
    console.log(msg);
}

function processRequests(a, b) {
    infoLog("waiting for new requests...");
}
