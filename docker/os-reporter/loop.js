var sleep = require('system-sleep');

console.log("loop started...");
var loopCount = 30;
console.clear();
for(var i=0;i<loopCount;i++) {
    var output = "trade with id " + Number(i+1) + " booked";
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(output);
    sleep(500);
}
process.stdout.write("\n");
console.log("loop ended.");