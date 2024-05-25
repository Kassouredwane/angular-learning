export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public city: string,
        public jobStatus: string,
        public phone: number,
        public subscribe: boolean
    ) { }
}