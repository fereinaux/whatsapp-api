"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = exports.default = {
  secretKey: 'SysIgrejaToken',
  host: 'https://api.iecbeventos.com.br/',
  port: '3500',
  deviceName: 'SysIgreja Whatsapp',
  poweredBy: 'SysIgreja',
  startAllSession: true,
  tokenStoreType: 'file',
  maxListeners: 15,
  customUserDataDir: '../userDataDir/',
  webhook: {
    url: null,
    autoDownload: true,
    uploadS3: false,
    readMessage: true,
    allUnreadOnStart: false,
    listenAcks: true,
    onPresenceChanged: true,
    onParticipantsChanged: true,
    onReactionMessage: true,
    onPollResponse: true,
    onRevokedMessage: true,
    onLabelUpdated: true,
    onSelfMessage: false,
    ignore: ['status@broadcast']
  },
  websocket: {
    autoDownload: false,
    uploadS3: false
  },
  chatwoot: {
    sendQrCode: true,
    sendStatus: true
  },
  archive: {
    enable: false,
    waitTime: 10,
    daysToArchive: 45
  },
  log: {
    level: 'info', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file']
  },
  createOptions: {
    browserArgs: [
    '--disable-web-security',
    '--no-sandbox',
    '--disable-web-security',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0',
    '--disable-background-networking',
    '--disable-default-apps',
    '--disable-extensions',
    '--disable-sync',
    '--disable-translate',
    '--hide-scrollbars',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-first-run',
    '--safebrowsing-disable-auto-update',
    '--ignore-certificate-errors',
    '--ignore-ssl-errors',
    '--ignore-certificate-errors-spki-list'],

    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: null
  },
  mapper: {
    enable: false,
    prefix: 'tagone-'
  },
  db: {
    mongodbDatabase: 'tokens',
    mongodbCollection: '',
    mongodbUser: '',
    mongodbPassword: '',
    mongodbHost: '',
    mongoIsRemote: true,
    mongoURLRemote: '',
    mongodbPort: 27017,
    redisHost: 'localhost',
    redisPort: 6379,
    redisPassword: '',
    redisDb: 0,
    redisPrefix: 'docker'
  },
  aws_s3: {
    region: 'sa-east-1',
    access_key_id: null,
    secret_key: null,
    defaultBucketName: null,
    endpoint: null,
    forcePathStyle: null
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzZWNyZXRLZXkiLCJob3N0IiwicG9ydCIsImRldmljZU5hbWUiLCJwb3dlcmVkQnkiLCJzdGFydEFsbFNlc3Npb24iLCJ0b2tlblN0b3JlVHlwZSIsIm1heExpc3RlbmVycyIsImN1c3RvbVVzZXJEYXRhRGlyIiwid2ViaG9vayIsInVybCIsImF1dG9Eb3dubG9hZCIsInVwbG9hZFMzIiwicmVhZE1lc3NhZ2UiLCJhbGxVbnJlYWRPblN0YXJ0IiwibGlzdGVuQWNrcyIsIm9uUHJlc2VuY2VDaGFuZ2VkIiwib25QYXJ0aWNpcGFudHNDaGFuZ2VkIiwib25SZWFjdGlvbk1lc3NhZ2UiLCJvblBvbGxSZXNwb25zZSIsIm9uUmV2b2tlZE1lc3NhZ2UiLCJvbkxhYmVsVXBkYXRlZCIsIm9uU2VsZk1lc3NhZ2UiLCJpZ25vcmUiLCJ3ZWJzb2NrZXQiLCJjaGF0d29vdCIsInNlbmRRckNvZGUiLCJzZW5kU3RhdHVzIiwiYXJjaGl2ZSIsImVuYWJsZSIsIndhaXRUaW1lIiwiZGF5c1RvQXJjaGl2ZSIsImxvZyIsImxldmVsIiwibG9nZ2VyIiwiY3JlYXRlT3B0aW9ucyIsImJyb3dzZXJBcmdzIiwibGlua1ByZXZpZXdBcGlTZXJ2ZXJzIiwibWFwcGVyIiwicHJlZml4IiwiZGIiLCJtb25nb2RiRGF0YWJhc2UiLCJtb25nb2RiQ29sbGVjdGlvbiIsIm1vbmdvZGJVc2VyIiwibW9uZ29kYlBhc3N3b3JkIiwibW9uZ29kYkhvc3QiLCJtb25nb0lzUmVtb3RlIiwibW9uZ29VUkxSZW1vdGUiLCJtb25nb2RiUG9ydCIsInJlZGlzSG9zdCIsInJlZGlzUG9ydCIsInJlZGlzUGFzc3dvcmQiLCJyZWRpc0RiIiwicmVkaXNQcmVmaXgiLCJhd3NfczMiLCJyZWdpb24iLCJhY2Nlc3Nfa2V5X2lkIiwic2VjcmV0X2tleSIsImRlZmF1bHRCdWNrZXROYW1lIiwiZW5kcG9pbnQiLCJmb3JjZVBhdGhTdHlsZSJdLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNlY3JldEtleTogJ1N5c0lncmVqYVRva2VuJyxcclxuICBob3N0OiAnaHR0cHM6Ly9hcGkuaWVjYmV2ZW50b3MuY29tLmJyLycsXHJcbiAgcG9ydDogJzM1MDAnLFxyXG4gIGRldmljZU5hbWU6ICdTeXNJZ3JlamEgV2hhdHNhcHAnLFxyXG4gIHBvd2VyZWRCeTogJ1N5c0lncmVqYScsXHJcbiAgc3RhcnRBbGxTZXNzaW9uOiB0cnVlLFxyXG4gIHRva2VuU3RvcmVUeXBlOiAnZmlsZScsXHJcbiAgbWF4TGlzdGVuZXJzOiAxNSxcclxuICBjdXN0b21Vc2VyRGF0YURpcjogJy4uL3VzZXJEYXRhRGlyLycsXHJcbiAgd2ViaG9vazoge1xyXG4gICAgdXJsOiBudWxsLFxyXG4gICAgYXV0b0Rvd25sb2FkOiB0cnVlLFxyXG4gICAgdXBsb2FkUzM6IGZhbHNlLFxyXG4gICAgcmVhZE1lc3NhZ2U6IHRydWUsXHJcbiAgICBhbGxVbnJlYWRPblN0YXJ0OiBmYWxzZSxcclxuICAgIGxpc3RlbkFja3M6IHRydWUsXHJcbiAgICBvblByZXNlbmNlQ2hhbmdlZDogdHJ1ZSxcclxuICAgIG9uUGFydGljaXBhbnRzQ2hhbmdlZDogdHJ1ZSxcclxuICAgIG9uUmVhY3Rpb25NZXNzYWdlOiB0cnVlLFxyXG4gICAgb25Qb2xsUmVzcG9uc2U6IHRydWUsXHJcbiAgICBvblJldm9rZWRNZXNzYWdlOiB0cnVlLFxyXG4gICAgb25MYWJlbFVwZGF0ZWQ6IHRydWUsXHJcbiAgICBvblNlbGZNZXNzYWdlOiBmYWxzZSxcclxuICAgIGlnbm9yZTogWydzdGF0dXNAYnJvYWRjYXN0J10sXHJcbiAgfSxcclxuICB3ZWJzb2NrZXQ6IHtcclxuICAgIGF1dG9Eb3dubG9hZDogZmFsc2UsXHJcbiAgICB1cGxvYWRTMzogZmFsc2UsXHJcbiAgfSxcclxuICBjaGF0d29vdDoge1xyXG4gICAgc2VuZFFyQ29kZTogdHJ1ZSxcclxuICAgIHNlbmRTdGF0dXM6IHRydWUsXHJcbiAgfSxcclxuICBhcmNoaXZlOiB7XHJcbiAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgd2FpdFRpbWU6IDEwLFxyXG4gICAgZGF5c1RvQXJjaGl2ZTogNDUsXHJcbiAgfSxcclxuICBsb2c6IHtcclxuICAgIGxldmVsOiAnaW5mbycsIC8vIEJlZm9yZSBvcGVuIGEgaXNzdWUsIGNoYW5nZSBsZXZlbCB0byBzaWxseSBhbmQgcmV0cnkgYSBhY3Rpb25cclxuICAgIGxvZ2dlcjogWydjb25zb2xlJywgJ2ZpbGUnXSxcclxuICB9LFxyXG4gIGNyZWF0ZU9wdGlvbnM6IHtcclxuICAgIGJyb3dzZXJBcmdzOiBbXHJcbiAgICAgICctLWRpc2FibGUtd2ViLXNlY3VyaXR5JyxcclxuICAgICAgJy0tbm8tc2FuZGJveCcsXHJcbiAgICAgICctLWRpc2FibGUtd2ViLXNlY3VyaXR5JyxcclxuICAgICAgJy0tYWdncmVzc2l2ZS1jYWNoZS1kaXNjYXJkJyxcclxuICAgICAgJy0tZGlzYWJsZS1jYWNoZScsXHJcbiAgICAgICctLWRpc2FibGUtYXBwbGljYXRpb24tY2FjaGUnLFxyXG4gICAgICAnLS1kaXNhYmxlLW9mZmxpbmUtbG9hZC1zdGFsZS1jYWNoZScsXHJcbiAgICAgICctLWRpc2stY2FjaGUtc2l6ZT0wJyxcclxuICAgICAgJy0tZGlzYWJsZS1iYWNrZ3JvdW5kLW5ldHdvcmtpbmcnLFxyXG4gICAgICAnLS1kaXNhYmxlLWRlZmF1bHQtYXBwcycsXHJcbiAgICAgICctLWRpc2FibGUtZXh0ZW5zaW9ucycsXHJcbiAgICAgICctLWRpc2FibGUtc3luYycsXHJcbiAgICAgICctLWRpc2FibGUtdHJhbnNsYXRlJyxcclxuICAgICAgJy0taGlkZS1zY3JvbGxiYXJzJyxcclxuICAgICAgJy0tbWV0cmljcy1yZWNvcmRpbmctb25seScsXHJcbiAgICAgICctLW11dGUtYXVkaW8nLFxyXG4gICAgICAnLS1uby1maXJzdC1ydW4nLFxyXG4gICAgICAnLS1zYWZlYnJvd3NpbmctZGlzYWJsZS1hdXRvLXVwZGF0ZScsXHJcbiAgICAgICctLWlnbm9yZS1jZXJ0aWZpY2F0ZS1lcnJvcnMnLFxyXG4gICAgICAnLS1pZ25vcmUtc3NsLWVycm9ycycsXHJcbiAgICAgICctLWlnbm9yZS1jZXJ0aWZpY2F0ZS1lcnJvcnMtc3BraS1saXN0JyxcclxuICAgIF0sXHJcbiAgICAvKipcclxuICAgICAqIEV4YW1wbGUgb2YgY29uZmlndXJpbmcgdGhlIGxpbmtQcmV2aWV3IGdlbmVyYXRvclxyXG4gICAgICogSWYgeW91IHNldCB0aGlzIHRvICdudWxsJywgaXQgd2lsbCB1c2UgZ2xvYmFsIHNlcnZlcnM7IGhvd2V2ZXIsIHlvdSBoYXZlIHRoZSBvcHRpb24gdG8gZGVmaW5lIHlvdXIgb3duIHNlcnZlclxyXG4gICAgICogQ2xvbmUgdGhlIHJlcG9zaXRvcnkgaHR0cHM6Ly9naXRodWIuY29tL3dwcGNvbm5lY3QtdGVhbS93YS1qcy1hcGktc2VydmVyIGFuZCBob3N0IGl0IG9uIHlvdXIgc2VydmVyIHdpdGggc3NsXHJcbiAgICAgKlxyXG4gICAgICogQ29uZmlndXJlIHRoZSBhdHRyaWJ1dGUgYXMgZm9sbG93czpcclxuICAgICAqIGxpbmtQcmV2aWV3QXBpU2VydmVyczogWyAnaHR0cHM6Ly93d3cueW91cnNlcnZlci5jb20vd2EtanMtYXBpLXNlcnZlcicgXVxyXG4gICAgICovXHJcbiAgICBsaW5rUHJldmlld0FwaVNlcnZlcnM6IG51bGwsXHJcbiAgfSxcclxuICBtYXBwZXI6IHtcclxuICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICBwcmVmaXg6ICd0YWdvbmUtJyxcclxuICB9LFxyXG4gIGRiOiB7XHJcbiAgICBtb25nb2RiRGF0YWJhc2U6ICd0b2tlbnMnLFxyXG4gICAgbW9uZ29kYkNvbGxlY3Rpb246ICcnLFxyXG4gICAgbW9uZ29kYlVzZXI6ICcnLFxyXG4gICAgbW9uZ29kYlBhc3N3b3JkOiAnJyxcclxuICAgIG1vbmdvZGJIb3N0OiAnJyxcclxuICAgIG1vbmdvSXNSZW1vdGU6IHRydWUsXHJcbiAgICBtb25nb1VSTFJlbW90ZTogJycsXHJcbiAgICBtb25nb2RiUG9ydDogMjcwMTcsXHJcbiAgICByZWRpc0hvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgcmVkaXNQb3J0OiA2Mzc5LFxyXG4gICAgcmVkaXNQYXNzd29yZDogJycsXHJcbiAgICByZWRpc0RiOiAwLFxyXG4gICAgcmVkaXNQcmVmaXg6ICdkb2NrZXInLFxyXG4gIH0sXHJcbiAgYXdzX3MzOiB7XHJcbiAgICByZWdpb246ICdzYS1lYXN0LTEnLFxyXG4gICAgYWNjZXNzX2tleV9pZDogbnVsbCxcclxuICAgIHNlY3JldF9rZXk6IG51bGwsXHJcbiAgICBkZWZhdWx0QnVja2V0TmFtZTogbnVsbCxcclxuICAgIGVuZHBvaW50OiBudWxsLFxyXG4gICAgZm9yY2VQYXRoU3R5bGU6IG51bGwsXHJcbiAgfSxcclxufTtcclxuIl0sIm1hcHBpbmdzIjoicUlBQWU7RUFDYkEsU0FBUyxFQUFFLGdCQUFnQjtFQUMzQkMsSUFBSSxFQUFFLGlDQUFpQztFQUN2Q0MsSUFBSSxFQUFFLE1BQU07RUFDWkMsVUFBVSxFQUFFLG9CQUFvQjtFQUNoQ0MsU0FBUyxFQUFFLFdBQVc7RUFDdEJDLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxjQUFjLEVBQUUsTUFBTTtFQUN0QkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLGlCQUFpQixFQUFFLGlCQUFpQjtFQUNwQ0MsT0FBTyxFQUFFO0lBQ1BDLEdBQUcsRUFBRSxJQUFJO0lBQ1RDLFlBQVksRUFBRSxJQUFJO0lBQ2xCQyxRQUFRLEVBQUUsS0FBSztJQUNmQyxXQUFXLEVBQUUsSUFBSTtJQUNqQkMsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLGlCQUFpQixFQUFFLElBQUk7SUFDdkJDLHFCQUFxQixFQUFFLElBQUk7SUFDM0JDLGlCQUFpQixFQUFFLElBQUk7SUFDdkJDLGNBQWMsRUFBRSxJQUFJO0lBQ3BCQyxnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsYUFBYSxFQUFFLEtBQUs7SUFDcEJDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQjtFQUM3QixDQUFDO0VBQ0RDLFNBQVMsRUFBRTtJQUNUYixZQUFZLEVBQUUsS0FBSztJQUNuQkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEYSxRQUFRLEVBQUU7SUFDUkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFVBQVUsRUFBRTtFQUNkLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1BDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLGFBQWEsRUFBRTtFQUNqQixDQUFDO0VBQ0RDLEdBQUcsRUFBRTtJQUNIQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ2ZDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNO0VBQzVCLENBQUM7RUFDREMsYUFBYSxFQUFFO0lBQ2JDLFdBQVcsRUFBRTtJQUNYLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsdUNBQXVDLENBQ3hDOztJQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSUMscUJBQXFCLEVBQUU7RUFDekIsQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDTlQsTUFBTSxFQUFFLEtBQUs7SUFDYlUsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNEQyxFQUFFLEVBQUU7SUFDRkMsZUFBZSxFQUFFLFFBQVE7SUFDekJDLGlCQUFpQixFQUFFLEVBQUU7SUFDckJDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLGVBQWUsRUFBRSxFQUFFO0lBQ25CQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxhQUFhLEVBQUUsSUFBSTtJQUNuQkMsY0FBYyxFQUFFLEVBQUU7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxTQUFTLEVBQUUsV0FBVztJQUN0QkMsU0FBUyxFQUFFLElBQUk7SUFDZkMsYUFBYSxFQUFFLEVBQUU7SUFDakJDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLFdBQVcsRUFBRTtFQUNmLENBQUM7RUFDREMsTUFBTSxFQUFFO0lBQ05DLE1BQU0sRUFBRSxXQUFXO0lBQ25CQyxhQUFhLEVBQUUsSUFBSTtJQUNuQkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLGlCQUFpQixFQUFFLElBQUk7SUFDdkJDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=