module objects {
    
    export class ServerError extends Error {
        
        constructor(err:string) {
            super(err);
        }
        
    }
    
}