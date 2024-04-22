declare const _default: {
    secretKey: string;
    host: string;
    port: string;
    deviceName: string;
    poweredBy: string;
    startAllSession: boolean;
    tokenStoreType: string;
    maxListeners: number;
    customUserDataDir: string;
    webhook: {
        url: null;
        autoDownload: boolean;
        uploadS3: boolean;
        readMessage: boolean;
        allUnreadOnStart: boolean;
        listenAcks: boolean;
        onPresenceChanged: boolean;
        onParticipantsChanged: boolean;
        onReactionMessage: boolean;
        onPollResponse: boolean;
        onRevokedMessage: boolean;
        onLabelUpdated: boolean;
        onSelfMessage: boolean;
        ignore: string[];
    };
    websocket: {
        autoDownload: boolean;
        uploadS3: boolean;
    };
    chatwoot: {
        sendQrCode: boolean;
        sendStatus: boolean;
    };
    archive: {
        enable: boolean;
        waitTime: number;
        daysToArchive: number;
    };
    log: {
        level: string;
        logger: string[];
    };
    createOptions: {
        browserArgs: string[];
        /**
         * Example of configuring the linkPreview generator
         * If you set this to 'null', it will use global servers; however, you have the option to define your own server
         * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
         *
         * Configure the attribute as follows:
         * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
         */
        linkPreviewApiServers: null;
    };
    mapper: {
        enable: boolean;
        prefix: string;
    };
    db: {
        mongodbDatabase: string;
        mongodbCollection: string;
        mongodbUser: string;
        mongodbPassword: string;
        mongodbHost: string;
        mongoIsRemote: boolean;
        mongoURLRemote: string;
        mongodbPort: number;
        redisHost: string;
        redisPort: number;
        redisPassword: string;
        redisDb: number;
        redisPrefix: string;
    };
    aws_s3: {
        region: string;
        access_key_id: null;
        secret_key: null;
        defaultBucketName: null;
        endpoint: null;
        forcePathStyle: null;
    };
};
export default _default;
