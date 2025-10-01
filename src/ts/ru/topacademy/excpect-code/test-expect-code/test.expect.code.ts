import { expectCode } from "../expect.code.ts";

console.log(expectCode("{ [ ( ) ] }"));
console.log(expectCode("{ [ ( ) ] ."));