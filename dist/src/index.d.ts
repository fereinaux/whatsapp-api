export declare const logger: import("winston").Logger;
export declare function initServer(serverOptions: any): {
    app: import("express-serve-static-core").Express;
    routes: import("express-serve-static-core").Router;
    logger: import("winston").Logger;
};
