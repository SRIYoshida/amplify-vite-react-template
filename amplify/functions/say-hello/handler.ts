import type { Schema } from "../../data/resource"
export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments
  // CloudWatch Logs に出力する
  console.log(`ToDo content received: ${name}`);
  // return typed from `.returns()`
  return `Hello, ${name}!`
}