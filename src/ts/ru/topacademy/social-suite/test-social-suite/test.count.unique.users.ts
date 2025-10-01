import { countUniqueUsers } from "../count.unique.users.ts";


export function testCountUniqueUsers() {

    const usersOnSuit = [12, 16, 16, 90, 100, 22, 22];
    
    console.log(countUniqueUsers(usersOnSuit));
}