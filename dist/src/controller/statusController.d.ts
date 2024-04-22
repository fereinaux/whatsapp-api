import { Request, Response } from 'express';
export declare function sendTextStorie(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function sendImageStorie(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function sendVideoStorie(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
