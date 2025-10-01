export function countUniqueUsers(usersId: number[]): number {
    const uniqueUsers = new Set(usersId);

    return uniqueUsers.size;
}