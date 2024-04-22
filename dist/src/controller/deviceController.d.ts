import { Request, Response } from 'express';
export declare function setProfileName(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function showAllContacts(req: Request, res: Response): Promise<void>;
export declare function getAllChats(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listChats(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAllChatsWithMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Depreciado em favor de getMessages
 */
export declare function getAllMessagesInChat(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAllNewMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAllUnreadMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getChatById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMessageById(req: Request, res: Response): Promise<void>;
export declare function getBatteryLevel(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getHostDevice(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPhoneNumber(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getBlockList(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteChat(req: Request, res: Response): Promise<void>;
export declare function deleteAllChats(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function clearChat(req: Request, res: Response): Promise<void>;
export declare function clearAllChats(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function archiveChat(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function archiveAllChats(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAllChatsArchiveds(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function reactMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function reply(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function forwardMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markUnseenMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function blockContact(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function unblockContact(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function pinChat(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function setProfilePic(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getUnreadMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getChatIsOnline(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getLastSeen(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getListMutes(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function loadAndGetAllMessagesInChat(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function sendContactVcard(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function sendMute(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function sendSeen(req: Request, res: Response): Promise<void>;
export declare function setChatState(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function setTemporaryMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function setTyping(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function setRecording(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function checkNumberStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getContact(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAllContacts(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getNumberProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getProfilePicFromServer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function setProfileStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function rejectCall(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function starMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getReactions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getVotes(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function chatWoot(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getPlatformFromMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;