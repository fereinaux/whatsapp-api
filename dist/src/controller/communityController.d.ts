import { Request, Response } from 'express';
export declare function createCommunity(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deactivateCommunity(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function addSubgroupsCommunity(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function removeSubgroupsCommunity(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function demoteCommunityParticipant(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function promoteCommunityParticipant(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getCommunityParticipants(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
