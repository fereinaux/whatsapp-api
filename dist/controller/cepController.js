"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.getCep = getCep;exports.getPostalCode = getPostalCode;var _axios = _interopRequireDefault(require("axios"));

var fs = _interopRequireWildcard(require("fs"));function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}

async function getPostalCode(req, res) {
  const result = await _axios.default.get(
    `https://geocoder.ca/${req.params.code}?json=1`
  );
  console.log(result.data);
  const info = {
    cep: result.data.postal,
    localidade: result.data.standard.city,
    uf: result.data.standard.prov,
    lat: result.data.latt,
    lon: result.data.longt
  };
  res.send(info);
}

async function getCep(req, res) {
  if (fs.existsSync(req.params.cep.replace('-', '') + '.json')) {
    fs.readFile(req.params.cep.replace('-', '') + '.json', (err, data) => {
      const info = JSON.parse(data);
      res.send(info);
    });
  } else {
    _axios.default.
    get(`https://cep.awesomeapi.com.br/json/${req.params.cep}`, {
      timeout: 5000
    }).
    then((axiosReq) => {
      const result = axiosReq.data;

      const info = {
        cep: result.cep,
        logradouro: result.address,
        bairro: result.district,
        localidade: result.city,
        uf: result.state,
        ibge: result.city_ibge,
        ddd: result.ddd,
        lat: result.lat,
        lon: result.lng
      };

      const data = JSON.stringify(info);
      fs.writeFileSync(req.params.cep.replace('-', '') + '.json', data);
      res.send(info);
    }).
    catch(() => {
      res.sendStatus(404);
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXhpb3MiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImZzIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJnZXRQb3N0YWxDb2RlIiwicmVxIiwicmVzIiwicmVzdWx0IiwiYXhpb3MiLCJwYXJhbXMiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpbmZvIiwiY2VwIiwicG9zdGFsIiwibG9jYWxpZGFkZSIsInN0YW5kYXJkIiwiY2l0eSIsInVmIiwicHJvdiIsImxhdCIsImxhdHQiLCJsb24iLCJsb25ndCIsInNlbmQiLCJnZXRDZXAiLCJleGlzdHNTeW5jIiwicmVwbGFjZSIsInJlYWRGaWxlIiwiZXJyIiwiSlNPTiIsInBhcnNlIiwidGltZW91dCIsInRoZW4iLCJheGlvc1JlcSIsImxvZ3JhZG91cm8iLCJhZGRyZXNzIiwiYmFpcnJvIiwiZGlzdHJpY3QiLCJzdGF0ZSIsImliZ2UiLCJjaXR5X2liZ2UiLCJkZGQiLCJsbmciLCJzdHJpbmdpZnkiLCJ3cml0ZUZpbGVTeW5jIiwiY2F0Y2giLCJzZW5kU3RhdHVzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2VwQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdGFsQ29kZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9nZW9jb2Rlci5jYS8ke3JlcS5wYXJhbXMuY29kZX0/anNvbj0xYFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gIGNvbnN0IGluZm8gPSB7XHJcbiAgICBjZXA6IHJlc3VsdC5kYXRhLnBvc3RhbCxcclxuICAgIGxvY2FsaWRhZGU6IHJlc3VsdC5kYXRhLnN0YW5kYXJkLmNpdHksXHJcbiAgICB1ZjogcmVzdWx0LmRhdGEuc3RhbmRhcmQucHJvdixcclxuICAgIGxhdDogcmVzdWx0LmRhdGEubGF0dCxcclxuICAgIGxvbjogcmVzdWx0LmRhdGEubG9uZ3QsXHJcbiAgfTtcclxuICByZXMuc2VuZChpbmZvKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENlcChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoZnMuZXhpc3RzU3luYyhyZXEucGFyYW1zLmNlcC5yZXBsYWNlKCctJywgJycpICsgJy5qc29uJykpIHtcclxuICAgIGZzLnJlYWRGaWxlKHJlcS5wYXJhbXMuY2VwLnJlcGxhY2UoJy0nLCAnJykgKyAnLmpzb24nLCAoZXJyLCBkYXRhOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgaW5mbyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgIHJlcy5zZW5kKGluZm8pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYGh0dHBzOi8vY2VwLmF3ZXNvbWVhcGkuY29tLmJyL2pzb24vJHtyZXEucGFyYW1zLmNlcH1gLCB7XHJcbiAgICAgICAgdGltZW91dDogNTAwMCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGF4aW9zUmVxKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXhpb3NSZXEuZGF0YTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mbyA9IHtcclxuICAgICAgICAgIGNlcDogcmVzdWx0LmNlcCxcclxuICAgICAgICAgIGxvZ3JhZG91cm86IHJlc3VsdC5hZGRyZXNzLFxyXG4gICAgICAgICAgYmFpcnJvOiByZXN1bHQuZGlzdHJpY3QsXHJcbiAgICAgICAgICBsb2NhbGlkYWRlOiByZXN1bHQuY2l0eSxcclxuICAgICAgICAgIHVmOiByZXN1bHQuc3RhdGUsXHJcbiAgICAgICAgICBpYmdlOiByZXN1bHQuY2l0eV9pYmdlLFxyXG4gICAgICAgICAgZGRkOiByZXN1bHQuZGRkLFxyXG4gICAgICAgICAgbGF0OiByZXN1bHQubGF0LFxyXG4gICAgICAgICAgbG9uOiByZXN1bHQubG5nLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShpbmZvKTtcclxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHJlcS5wYXJhbXMuY2VwLnJlcGxhY2UoJy0nLCAnJykgKyAnLmpzb24nLCBkYXRhKTtcclxuICAgICAgICByZXMuc2VuZChpbmZvKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOE5BQUEsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBOztBQUVBLElBQUFDLEVBQUEsR0FBQUMsdUJBQUEsQ0FBQUYsT0FBQSxRQUF5QixTQUFBRyx5QkFBQUMsQ0FBQSw0QkFBQUMsT0FBQSxrQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLEdBQUFFLENBQUEsT0FBQUYsT0FBQSxXQUFBRix3QkFBQSxZQUFBQSxDQUFBQyxDQUFBLFVBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLElBQUFGLENBQUEsWUFBQUYsd0JBQUFFLENBQUEsRUFBQUUs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