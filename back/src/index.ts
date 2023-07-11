import "dotenv/config";
import { createServer } from "http";
import { createExpressApp } from "./express";

const hostName = "localhost";
const port = 4000;

//prettier-ignore

createServer(createExpressApp()).listen(port, () =>
  // console.log(`${process.env.GROCERY_API}`)
  console.log(`connect http://${hostName}:${port}`)
);
