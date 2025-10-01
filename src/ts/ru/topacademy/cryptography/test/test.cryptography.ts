import { reverseString } from "../crypto-graphy-stack/reverse-string/reverse.string.ts";

export function testCryptography(){

    const original = "Кощей бессмертный";
    const reversed = reverseString(original);
    console.log(reversed);
    
}