import winston from "winston";

require("winston-daily-rotate-file");

const rotatingTransport = new winston.transports.DailyRotateFile({
  filename: "./temp/%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

const logger = winston.createLogger({
  transports: [new winston.transports.Console(), rotatingTransport],
});

export default logger;
