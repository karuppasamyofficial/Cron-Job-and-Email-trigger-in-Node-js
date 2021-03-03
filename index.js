const express = require("express");

const app = express();
const port = 3000;

var cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("running every minute 1, 2, 4 and 5");
});

app.listen(port, () =>
  console.log("nodeOracleRestApi app listening on port %s!", port)
);
