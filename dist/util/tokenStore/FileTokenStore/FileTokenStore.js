"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.defaultFileTokenStoreOptions = exports.FileTokenStore = void 0;
















var fs = _interopRequireWildcard(require("fs"));
var path = _interopRequireWildcard(require("path"));
var _sanitizeFilename = _interopRequireDefault(require("sanitize-filename"));

var _ = require("../../..");function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;} /*
 * This file is part of WPPConnect.
 *
 * WPPConnect is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * WPPConnect is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with WPPConnect.  If not, see <https://www.gnu.org/licenses/>.
 */ /// <reference types="node" />


















const defaultFileTokenStoreOptions = exports.defaultFileTokenStoreOptions = {
  decodeFunction: JSON.parse,
  encodeFunction: JSON.stringify,
  encoding: 'utf8',
  fileExtension: '.data.json',
  path: './tokens'
};

class FileTokenStore {
  options;

  constructor(options = {}) {
    this.options = Object.assign(
      {},
      defaultFileTokenStoreOptions,
      options
    );
  }

  /**
   * Resolve the path of file
   * @param sessionName Name of session
   * @returns Full path of token file
   */
  resolverPath(sessionName) {
    const filename = (0, _sanitizeFilename.default)(sessionName) + this.options.fileExtension;
    return path.resolve(process.cwd(), path.join(this.options.path, filename));
  }

  async getToken(
  sessionName)
  {
    const filePath = this.resolverPath(sessionName);

    if (!fs.existsSync(filePath)) {
      return undefined;
    }

    const text = await fs.promises.
    readFile(filePath, {
      encoding: this.options.encoding
    }).
    catch(() => null);

    if (!text) {
      return undefined;
    }

    try {
      return this.options.decodeFunction(text);
    } catch (error) {
      _.logger.debug(error);
      return undefined;
    }
  }

  async setToken(
  sessionName,
  tokenData)
  {
    if (!tokenData) {
      return false;
    }

    if (!fs.existsSync(this.options.path)) {
      await fs.promises.mkdir(this.options.path, { recursive: true });
    }

    const filePath = this.resolverPath(sessionName);

    try {
      const text = this.options.encodeFunction(tokenData);

      await fs.promises.writeFile(filePath, text, {
        encoding: this.options.encoding
      });
      return true;
    } catch (error) {
      _.logger.debug(error);
      return false;
    }
  }

  async removeToken(sessionName) {
    const filePath = this.resolverPath(sessionName);

    if (!fs.existsSync(filePath)) {
      return false;
    }

    try {
      await fs.promises.unlink(filePath);
      return true;
    } catch (error) {
      _.logger.debug(error);
      return false;
    }
  }

  async listTokens() {
    if (!fs.existsSync(this.options.path)) {
      return [];
    }

    try {
      let files = await fs.promises.readdir(this.options.path);

      // Only sessions with same fileExtension
      files = files.filter((file) => file.endsWith(this.options.fileExtension));

      // Return name only
      files = files.map((file) =>
      path.basename(file, this.options.fileExtension)
      );

      return files;
    } catch (error) {
      _.logger.debug(error);
      return [];
    }
  }
}exports.FileTokenStore = FileTokenStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmcyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsInBhdGgiLCJfc2FuaXRpemVGaWxlbmFtZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiZGVmYXVsdEZpbGVUb2tlblN0b3JlT3B0aW9ucyIsImV4cG9ydHMiLCJkZWNvZGVGdW5jdGlvbiIsIkpTT04iLCJwYXJzZSIsImVuY29kZUZ1bmN0aW9uIiwic3RyaW5naWZ5IiwiZW5jb2RpbmciLCJmaWxlRXh0ZW5zaW9uIiwiRmlsZVRva2VuU3RvcmUiLCJvcHRpb25zIiwiY29uc3RydWN0b3IiLCJhc3NpZ24iLCJyZXNvbHZlclBhdGgiLCJzZXNzaW9uTmFtZSIsImZpbGVuYW1lIiwic2FuaXRpemUiLCJyZXNvbHZlIiwicHJvY2VzcyIsImN3ZCIsImpvaW4iLCJnZXRUb2tlbiIsImZpbGVQYXRoIiwiZXhpc3RzU3luYyIsInVuZGVmaW5lZCIsInRleHQiLCJwcm9taXNlcyIsInJlYWRGaWxlIiwiY2F0Y2giLCJlcnJvciIsImxvZ2dlciIsImRlYnVnIiwic2V0VG9rZW4iLCJ0b2tlbkRhdGEiLCJta2RpciIsInJlY3Vyc2l2ZSIsIndyaXRlRmlsZSIsInJlbW92ZVRva2VuIiwidW5saW5rIiwibGlzdFRva2VucyIsImZpbGVzIiwicmVhZGRpciIsImZpbHRlciIsImZpbGUiLCJlbmRzV2l0aCIsIm1hcCIsImJhc2VuYW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvdG9rZW5TdG9yZS9GaWxlVG9rZW5TdG9yZS9GaWxlVG9rZW5TdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBXUFBDb25uZWN0LlxyXG4gKlxyXG4gKiBXUFBDb25uZWN0IGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XHJcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXHJcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqXHJcbiAqIFdQUENvbm5lY3QgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggV1BQQ29ubmVjdC4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqL1xyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIiAvPlxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBzYW5pdGl6ZSBmcm9tICdzYW5pdGl6ZS1maWxlbmFtZSc7XHJcblxyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi8uLic7XHJcbmltcG9ydCB7IFNlc3Npb25Ub2tlbiwgVG9rZW5TdG9yZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVRva2VuU3RvcmVPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBEZWNvZGUgZnVuY3Rpb24gdG8gcGFyc2UgdG9rZW4gZmlsZSAoRGVmYXVsdCBgSlNPTi5wYXJzZWApIHtAbGluayBkZWZhdWx0RmlsZVRva2VuU3RvcmVPcHRpb25zfVxyXG4gICAqIEBkZWZhdWx0IGBKU09OLnBhcnNlYFxyXG4gICAqL1xyXG4gIGRlY29kZUZ1bmN0aW9uOiAodGV4dDogc3RyaW5nKSA9PiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuY29kZSBmdW5jdGlvbiB0byBzYXZlIHRva2VucyAoRGVmYXVsdCBgSlNPTi5zdHJpbmdpZnlgKVxyXG4gICAqIEBkZWZhdWx0IGBKU09OLnN0cmluZ2lmeWBcclxuICAgKi9cclxuICBlbmNvZGVGdW5jdGlvbjogKGRhdGE6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBFbmNvZGluZyB1c2VkIHRvIHJlYWQgYW5kIHNhdmUgZmlsZXNcclxuICAgKiBAZGVmYXVsdCAndXRmOCdcclxuICAgKi9cclxuICBlbmNvZGluZzogQnVmZmVyRW5jb2Rpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZWZhdWx0ICcuZGF0YS5qc29uJ1xyXG4gICAqL1xyXG4gIGZpbGVFeHRlbnNpb246IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRm9sZGVyIHBhdGggdG8gc3RvcmUgdG9rZW5zXHJcbiAgICogQGRlZmF1bHQgJy4vdG9rZW5zJ1xyXG4gICAqL1xyXG4gIHBhdGg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRGaWxlVG9rZW5TdG9yZU9wdGlvbnM6IEZpbGVUb2tlblN0b3JlT3B0aW9ucyA9IHtcclxuICBkZWNvZGVGdW5jdGlvbjogSlNPTi5wYXJzZSxcclxuICBlbmNvZGVGdW5jdGlvbjogSlNPTi5zdHJpbmdpZnksXHJcbiAgZW5jb2Rpbmc6ICd1dGY4JyxcclxuICBmaWxlRXh0ZW5zaW9uOiAnLmRhdGEuanNvbicsXHJcbiAgcGF0aDogJy4vdG9rZW5zJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVG9rZW5TdG9yZSBpbXBsZW1lbnRzIFRva2VuU3RvcmUge1xyXG4gIHByb3RlY3RlZCBvcHRpb25zOiBGaWxlVG9rZW5TdG9yZU9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhcnRpYWw8RmlsZVRva2VuU3RvcmVPcHRpb25zPiA9IHt9KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgZGVmYXVsdEZpbGVUb2tlblN0b3JlT3B0aW9ucyxcclxuICAgICAgb3B0aW9uc1xyXG4gICAgKSBhcyBGaWxlVG9rZW5TdG9yZU9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNvbHZlIHRoZSBwYXRoIG9mIGZpbGVcclxuICAgKiBAcGFyYW0gc2Vzc2lvbk5hbWUgTmFtZSBvZiBzZXNzaW9uXHJcbiAgICogQHJldHVybnMgRnVsbCBwYXRoIG9mIHRva2VuIGZpbGVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgcmVzb2x2ZXJQYXRoKHNlc3Npb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZmlsZW5hbWUgPSBzYW5pdGl6ZShzZXNzaW9uTmFtZSkgKyB0aGlzLm9wdGlvbnMuZmlsZUV4dGVuc2lvbjtcclxuICAgIHJldHVybiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgcGF0aC5qb2luKHRoaXMub3B0aW9ucy5wYXRoLCBmaWxlbmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFRva2VuKFxyXG4gICAgc2Vzc2lvbk5hbWU6IHN0cmluZ1xyXG4gICk6IFByb21pc2U8U2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMucmVzb2x2ZXJQYXRoKHNlc3Npb25OYW1lKTtcclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IGZzLnByb21pc2VzXHJcbiAgICAgIC5yZWFkRmlsZShmaWxlUGF0aCwge1xyXG4gICAgICAgIGVuY29kaW5nOiB0aGlzLm9wdGlvbnMuZW5jb2RpbmcsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuXHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRlY29kZUZ1bmN0aW9uKHRleHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgbG9nZ2VyLmRlYnVnKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzZXRUb2tlbihcclxuICAgIHNlc3Npb25OYW1lOiBzdHJpbmcsXHJcbiAgICB0b2tlbkRhdGE6IFNlc3Npb25Ub2tlbiB8IG51bGxcclxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmICghdG9rZW5EYXRhKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmModGhpcy5vcHRpb25zLnBhdGgpKSB7XHJcbiAgICAgIGF3YWl0IGZzLnByb21pc2VzLm1rZGlyKHRoaXMub3B0aW9ucy5wYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMucmVzb2x2ZXJQYXRoKHNlc3Npb25OYW1lKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5vcHRpb25zLmVuY29kZUZ1bmN0aW9uKHRva2VuRGF0YSk7XHJcblxyXG4gICAgICBhd2FpdCBmcy5wcm9taXNlcy53cml0ZUZpbGUoZmlsZVBhdGgsIHRleHQsIHtcclxuICAgICAgICBlbmNvZGluZzogdGhpcy5vcHRpb25zLmVuY29kaW5nLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBsb2dnZXIuZGVidWcoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVtb3ZlVG9rZW4oc2Vzc2lvbk5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLnJlc29sdmVyUGF0aChzZXNzaW9uTmFtZSk7XHJcblxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZnMucHJvbWlzZXMudW5saW5rKGZpbGVQYXRoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBsb2dnZXIuZGVidWcoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbGlzdFRva2VucygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmModGhpcy5vcHRpb25zLnBhdGgpKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZmlsZXMgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkZGlyKHRoaXMub3B0aW9ucy5wYXRoKTtcclxuXHJcbiAgICAgIC8vIE9ubHkgc2Vzc2lvbnMgd2l0aCBzYW1lIGZpbGVFeHRlbnNpb25cclxuICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuZW5kc1dpdGgodGhpcy5vcHRpb25zLmZpbGVFeHRlbnNpb24pKTtcclxuXHJcbiAgICAgIC8vIFJldHVybiBuYW1lIG9ubHlcclxuICAgICAgZmlsZXMgPSBmaWxlcy5tYXAoKGZpbGUpID0+XHJcbiAgICAgICAgcGF0aC5iYXNlbmFtZShmaWxlLCB0aGlzLm9wdGlvbnMuZmlsZUV4dGVuc2lvbilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiBmaWxlcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGxvZ2dlci5kZWJ1ZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxJQUFBQSxFQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxJQUFBLEdBQUFGLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxpQkFBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBOztBQUVBLElBQUFJLENBQUEsR0FBQUosT0FBQSxhQUFrQyxTQUFBSyx5QkFBQUMsQ0FBQSw0QkFBQUMsT0FBQSxrQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLEdBQUFFLENBQUEsT0FBQUYsT0FBQSxXQUFBRix3QkFBQSxZQUFBQSxDQUFBQyxDQUFBLFVBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLElBQUFGLENBQUEsWUFBQVAsd0JBQUFPLENBQUEsRUFBQUUsQ0FBQSxRQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFB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