const fs = require("fs")

fs.writeFileSync("./.env", `MONGO_CLIENT=${process.env.MONGO_CLIENT}\n`)