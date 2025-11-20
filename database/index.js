const EnvConfig = require("../config/env");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../generated/index.js");

const env = EnvConfig();
const connectionString=`${env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({ adapter });
module.exports = prisma;
