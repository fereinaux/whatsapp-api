/// <reference types="node" />
import { Request } from 'express';
import fs from 'fs';
import { ServerOptions } from '../types/ServerOptions';
export declare function contactToArray(number: any, isGroup?: boolean): any;
export declare function groupToArray(group: any): any;
export declare function groupNameToArray(group: any): any;
export declare function callWebHook(client: any, req: Request, event: any, data: any): Promise<void>;
export declare function autoDownload(client: any, req: any, message: any): Promise<void>;
export declare function startAllSessions(config: any, logger: any): Promise<void>;
export declare function startHelper(client: any, req: any): Promise<void>;
export declare function createFolders(): void;
export declare function strToBool(s: string): boolean;
export declare function getIPAddress(): any;
export declare function setMaxListners(serverOptions: ServerOptions): void;
export declare const unlinkAsync: typeof fs.unlink.__promisify__;
export declare function createCatalogLink(session: any): string;
