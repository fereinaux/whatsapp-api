"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _config = _interopRequireDefault(require("../../../config"));

const redis = _config.default.tokenStoreType === 'redis' ? require('redis') : null;

let RedisClient = null;

if (_config.default.tokenStoreType === 'redis') {
  RedisClient = redis.createClient(_config.default.db.redisPort, _config.default.db.redisHost, {
    password: _config.default.db.redisPassword,
    db: _config.default.db.redisDb
  });
}var _default = exports.default =

RedisClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJyZWRpcyIsImNvbmZpZyIsInRva2VuU3RvcmVUeXBlIiwiUmVkaXNDbGllbnQiLCJjcmVhdGVDbGllbnQiLCJkYiIsInJlZGlzUG9ydCIsInJlZGlzSG9zdCIsInBhc3N3b3JkIiwicmVkaXNQYXNzd29yZCIsInJlZGlzRGIiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvZGIvcmVkaXMvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xyXG5cclxuY29uc3QgcmVkaXMgPSBjb25maWcudG9rZW5TdG9yZVR5cGUgPT09ICdyZWRpcycgPyByZXF1aXJlKCdyZWRpcycpIDogbnVsbDtcclxuXHJcbmxldCBSZWRpc0NsaWVudDogYW55ID0gbnVsbDtcclxuXHJcbmlmIChjb25maWcudG9rZW5TdG9yZVR5cGUgPT09ICdyZWRpcycpIHtcclxuICBSZWRpc0NsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudChjb25maWcuZGIucmVkaXNQb3J0LCBjb25maWcuZGIucmVkaXNIb3N0LCB7XHJcbiAgICBwYXNzd29yZDogY29uZmlnLmRiLnJlZGlzUGFzc3dvcmQsXHJcbiAgICBkYjogY29uZmlnLmRiLnJlZGlzRGIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlzQ2xpZW50O1xyXG4iXSwibWFwcGluZ3MiOiJ5TEFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7O0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxlQUFNLENBQUNDLGNBQWMsS0FBSyxPQUFPLEdBQUdILE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJOztBQUV6RSxJQUFJSSxXQUFnQixHQUFHLElBQUk7O0FBRTNCLElBQUlGLGVBQU0sQ0FBQ0MsY0FBYyxLQUFLLE9BQU8sRUFBRTtFQUNyQ0MsV0FBVyxHQUFHSCxLQUFLLENBQUNJLFlBQVksQ0FBQ0gsZUFBTSxDQUFDSSxFQUFFLENBQUNDLFNBQVMsRUFBRUwsZUFBTSxDQUFDSSxFQUFFLENBQUNFLFNBQVMsRUFBRTtJQUN6RUMsUUFBUSxFQUFFUCxlQUFNLENBQUNJLEVBQUUsQ0FBQ0ksYUFBYTtJQUNqQ0osRUFBRSxFQUFFSixlQUFNLENBQUNJLEVBQUUsQ0FBQ0s7RUFDaEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxJQUFBQyxRQUFBLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQTs7QUFFY1YsV0FBVyIsImlnbm9yZUxpc3QiOltdfQ==