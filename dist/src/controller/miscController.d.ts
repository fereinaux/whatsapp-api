import { Request, Response } from 'express';
export declare function backupAllSessions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function restoreAllSessions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function takeScreenshot(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function clearSessionData(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function setLimit(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
