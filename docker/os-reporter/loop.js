var sleep = require('system-sleep');
const { Logger } = require('aws-cloudwatch-logs')
const AWS = require('aws-sdk');
const createLogger = require('aws-cloudwatch-logs');

console.clear();

var cloudwatchlogs = new AWS.CloudWatchLogs({
    apiVersion: '2014-03-28',
    region: 'eu-central-1'
});

var defaultLogger = createLogger({
    cloudwatchlogs: cloudwatchlogs,
    logGroupName: '/cloud-terminal/default-logs'   // Don't forget to create LogGroups: /API/endpoints or it will fail!
});
var errorLogger = createLogger({
    cloudwatchlogs: cloudwatchlogs,
    logGroupName: '/cloud-terminal/error-logs'      // Don't forget to create LogGroups: /api/errors or it will fail!
});

defaultLogger.log("INFO", "os-reporter started...");
console.log("loop started...");
var loopCount = 20;

for(var i=0;i<loopCount;i++) {
    var output = "trade with id " + Number(i+1) + " booked";
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(output);
    defaultLogger.log("INFO", output);
    sleep(500);
}
process.stdout.write("\n");
console.log("loop ended.");