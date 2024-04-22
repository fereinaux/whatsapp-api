import { NextFunction, Request, Response } from 'express';
export default function statusConnection(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
