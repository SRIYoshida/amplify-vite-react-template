import type { Schema } from "../../data/resource"
import { env } from "$amplify/env/say-hello"
export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments
  // CloudWatch Logs に出力する
  console.log(`ToDo content received: ${name}`);
  const message = env.MESSAGE;
  console.log("message", message);
  // return typed from `.returns()`
  return `Hello, ${name}!`
}