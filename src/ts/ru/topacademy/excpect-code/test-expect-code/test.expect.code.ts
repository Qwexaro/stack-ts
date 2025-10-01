import { expectCode } from "../expect.code.ts";


export function testExcpectCode() {
    
    console.log(expectCode("{ [ ( ) ] }"));
    console.log(expectCode("{ [ ( ) ] ."));
}