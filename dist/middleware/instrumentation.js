"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.metrics = metrics;exports.prometheusRegister = void 0;
















var _promClient = _interopRequireDefault(require("prom-client")); /*
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const register = new _promClient.default.Registry();async function metrics(req, res) {/**
     #swagger.tags = ["Misc"]
     #swagger.autoBody=false
     #swagger.description = 'This endpoint can be used to check the status of API metrics. It returns a response with the collected metrics.'
     }
   */const register = new _promClient.default.Registry();register.setDefaultLabels({ app: 'wppconnect-server' });_promClient.default.collectDefaultMetrics({ register });res.setHeader('Content-Type', register.contentType);register.metrics().then((data) => res.status(200).send(data));}
const prometheusRegister = exports.prometheusRegister = register;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcHJvbUNsaWVudCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwicmVnaXN0ZXIiLCJQcm9tZXRoZXVzIiwiUmVnaXN0cnkiLCJtZXRyaWNzIiwicmVxIiwicmVzIiwic2V0RGVmYXVsdExhYmVscyIsImFwcCIsImNvbGxlY3REZWZhdWx0TWV0cmljcyIsInNldEhlYWRlciIsImNvbnRlbnRUeXBlIiwidGhlbiIsImRhdGEiLCJzdGF0dXMiLCJzZW5kIiwicHJvbWV0aGV1c1JlZ2lzdGVyIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2luc3RydW1lbnRhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDb3B5cmlnaHQgMjAyMSBXUFBDb25uZWN0IFRlYW1cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IFByb21ldGhldXMgZnJvbSAncHJvbS1jbGllbnQnO1xyXG5cclxuY29uc3QgcmVnaXN0ZXIgPSBuZXcgUHJvbWV0aGV1cy5SZWdpc3RyeSgpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ldHJpY3MocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgLyoqXHJcbiAgICAgI3N3YWdnZXIudGFncyA9IFtcIk1pc2NcIl1cclxuICAgICAjc3dhZ2dlci5hdXRvQm9keT1mYWxzZVxyXG4gICAgICNzd2FnZ2VyLmRlc2NyaXB0aW9uID0gJ1RoaXMgZW5kcG9pbnQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgdGhlIHN0YXR1cyBvZiBBUEkgbWV0cmljcy4gSXQgcmV0dXJucyBhIHJlc3BvbnNlIHdpdGggdGhlIGNvbGxlY3RlZCBtZXRyaWNzLidcclxuICAgICB9XHJcbiAgICovXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBuZXcgUHJvbWV0aGV1cy5SZWdpc3RyeSgpO1xyXG4gIHJlZ2lzdGVyLnNldERlZmF1bHRMYWJlbHMoe1xyXG4gICAgYXBwOiAnd3BwY29ubmVjdC1zZXJ2ZXInLFxyXG4gIH0pO1xyXG4gIFByb21ldGhldXMuY29sbGVjdERlZmF1bHRNZXRyaWNzKHsgcmVnaXN0ZXIgfSk7XHJcblxyXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIHJlZ2lzdGVyLmNvbnRlbnRUeXBlKTtcclxuICByZWdpc3Rlci5tZXRyaWNzKCkudGhlbigoZGF0YSkgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSkpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBwcm9tZXRoZXVzUmVnaXN0ZXIgPSByZWdpc3RlcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxJQUFBQSxXQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUEsaUJBQXFDLENBakJyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FLQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsbUJBQVUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FFbkMsZUFBZUMsT0FBT0EsQ0FBQ0MsR0FBWSxFQUFFQyxHQUFhLEVBQUUsQ0FDekQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQ0UsTUFBTUwsUUFBUSxHQUFHLElBQUlDLG1CQUFVLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQzFDRixRQUFRLENBQUNNLGdCQUFnQixDQUFDLEVBQ3hCQyxHQUFHLEVBQUUsbUJBQW1CLENBQzFCLENBQUMsQ0FBQyxDQUNGTixtQkFBVSxDQUFDTyxxQkFBcUIsQ0FBQyxFQUFFUixRQUFRLENBQUMsQ0FBQyxDQUFDLENBRTlDSyxHQUFHLENBQUNJLFNBQVMsQ0FBQyxjQUFjLEVBQUVULFFBQVEsQ0FBQ1UsV0FBVyxDQUFDLENBQ25EVixRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUNRLElBQUksQ0FBQyxDQUFDQyxJQUFJLEtBQUtQLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxDQUFDLENBQy9EO0FBQ08sTUFBTUcsa0JBQWtCLEdBQUFDLE9BQUEsQ0FBQUQsa0JBQUEsR0FBR2YsUUFBUSIsImlnbm9yZUxpc3QiOltdfQ==