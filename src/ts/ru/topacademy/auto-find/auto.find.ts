export class AutoFind {
    queries;
    
    constructor() { this.queries = new Map(); }

    addQuery(query: string) {
        const count = this.queries.get(query) || 0;
        this.queries.set(query, count + 1);
    }

    getSuggestions(prefix: string, limit = 10) {
        const matches = [];

        for (const [query, freq] of this.queries.entries()) {
        
        if (query.startsWith(prefix)) {
            matches.push({ query, freq });
        }
    }

    matches.sort((a, b) => b.freq - a.freq);
    
    return matches.slice(0, limit).map(item => item.query);
    }
}