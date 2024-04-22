"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.clientsArray = exports.chromiumArgs = void 0;exports.deleteSessionOnArray = deleteSessionOnArray;exports.sessions = exports.eventEmitter = void 0;















var _events = require("events"); /*
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
 */const chromiumArgs = exports.chromiumArgs = ['--disable-web-security', // Disables web security
'--no-sandbox', // Disables sandbox
'--aggressive-cache-discard', // Aggressively discards cache
'--disable-cache', // Disables cache
'--disable-application-cache', // Disables application cache
'--disable-offline-load-stale-cache', // Disables loading stale offline cache
'--disk-cache-size=0', // Sets disk cache size to 0
'--disable-background-networking', // Disables background networking activities
'--disable-default-apps', // Disables default apps
'--disable-extensions', // Disables extensions
'--disable-sync', // Disables synchronization
'--disable-translate', // Disables translation
'--hide-scrollbars', // Hides scrollbars
'--metrics-recording-only', // Records metrics only
'--mute-audio', // Mutes audio
'--no-first-run', // Skips first run
'--safebrowsing-disable-auto-update', // Disables Safe Browsing auto-update
'--ignore-certificate-errors', // Ignores certificate errors
'--ignore-ssl-errors', // Ignores SSL errors
'--ignore-certificate-errors-spki-list' // Ignores certificate errors in SPKI list
]; // eslint-disable-next-line prefer-const
let clientsArray = exports.clientsArray = [];const sessions = exports.sessions = [];const eventEmitter = exports.eventEmitter = new _events.EventEmitter();function deleteSessionOnArray(session) {const newArray = clientsArray;delete clientsArray[session];exports.clientsArray = clientsArray = newArray;}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsImNocm9taXVtQXJncyIsImV4cG9ydHMiLCJjbGllbnRzQXJyYXkiLCJzZXNzaW9ucyIsImV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImRlbGV0ZVNlc3Npb25PbkFycmF5Iiwic2Vzc2lvbiIsIm5ld0FycmF5Il0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvc2Vzc2lvblV0aWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IDIwMjEgV1BQQ29ubmVjdCBUZWFtXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgV2hhdHNhcHAgfSBmcm9tICdAd3BwY29ubmVjdC10ZWFtL3dwcGNvbm5lY3QnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNocm9taXVtQXJncyA9IFtcclxuICAnLS1kaXNhYmxlLXdlYi1zZWN1cml0eScsIC8vIERpc2FibGVzIHdlYiBzZWN1cml0eVxyXG4gICctLW5vLXNhbmRib3gnLCAvLyBEaXNhYmxlcyBzYW5kYm94XHJcbiAgJy0tYWdncmVzc2l2ZS1jYWNoZS1kaXNjYXJkJywgLy8gQWdncmVzc2l2ZWx5IGRpc2NhcmRzIGNhY2hlXHJcbiAgJy0tZGlzYWJsZS1jYWNoZScsIC8vIERpc2FibGVzIGNhY2hlXHJcbiAgJy0tZGlzYWJsZS1hcHBsaWNhdGlvbi1jYWNoZScsIC8vIERpc2FibGVzIGFwcGxpY2F0aW9uIGNhY2hlXHJcbiAgJy0tZGlzYWJsZS1vZmZsaW5lLWxvYWQtc3RhbGUtY2FjaGUnLCAvLyBEaXNhYmxlcyBsb2FkaW5nIHN0YWxlIG9mZmxpbmUgY2FjaGVcclxuICAnLS1kaXNrLWNhY2hlLXNpemU9MCcsIC8vIFNldHMgZGlzayBjYWNoZSBzaXplIHRvIDBcclxuICAnLS1kaXNhYmxlLWJhY2tncm91bmQtbmV0d29ya2luZycsIC8vIERpc2FibGVzIGJhY2tncm91bmQgbmV0d29ya2luZyBhY3Rpdml0aWVzXHJcbiAgJy0tZGlzYWJsZS1kZWZhdWx0LWFwcHMnLCAvLyBEaXNhYmxlcyBkZWZhdWx0IGFwcHNcclxuICAnLS1kaXNhYmxlLWV4dGVuc2lvbnMnLCAvLyBEaXNhYmxlcyBleHRlbnNpb25zXHJcbiAgJy0tZGlzYWJsZS1zeW5jJywgLy8gRGlzYWJsZXMgc3luY2hyb25pemF0aW9uXHJcbiAgJy0tZGlzYWJsZS10cmFuc2xhdGUnLCAvLyBEaXNhYmxlcyB0cmFuc2xhdGlvblxyXG4gICctLWhpZGUtc2Nyb2xsYmFycycsIC8vIEhpZGVzIHNjcm9sbGJhcnNcclxuICAnLS1tZXRyaWNzLXJlY29yZGluZy1vbmx5JywgLy8gUmVjb3JkcyBtZXRyaWNzIG9ubHlcclxuICAnLS1tdXRlLWF1ZGlvJywgLy8gTXV0ZXMgYXVkaW9cclxuICAnLS1uby1maXJzdC1ydW4nLCAvLyBTa2lwcyBmaXJzdCBydW5cclxuICAnLS1zYWZlYnJvd3NpbmctZGlzYWJsZS1hdXRvLXVwZGF0ZScsIC8vIERpc2FibGVzIFNhZmUgQnJvd3NpbmcgYXV0by11cGRhdGVcclxuICAnLS1pZ25vcmUtY2VydGlmaWNhdGUtZXJyb3JzJywgLy8gSWdub3JlcyBjZXJ0aWZpY2F0ZSBlcnJvcnNcclxuICAnLS1pZ25vcmUtc3NsLWVycm9ycycsIC8vIElnbm9yZXMgU1NMIGVycm9yc1xyXG4gICctLWlnbm9yZS1jZXJ0aWZpY2F0ZS1lcnJvcnMtc3BraS1saXN0JywgLy8gSWdub3JlcyBjZXJ0aWZpY2F0ZSBlcnJvcnMgaW4gU1BLSSBsaXN0XHJcbl07XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcclxuZXhwb3J0IGxldCBjbGllbnRzQXJyYXk6IFdoYXRzYXBwW10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gW107XHJcbmV4cG9ydCBjb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU2Vzc2lvbk9uQXJyYXkoc2Vzc2lvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBjbGllbnRzQXJyYXk7XHJcbiAgZGVsZXRlIGNsaWVudHNBcnJheVtzZXNzaW9uXTtcclxuICBjbGllbnRzQXJyYXkgPSBuZXdBcnJheTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBLFdBQXNDLENBaEJ0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FJTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUFHLENBQzFCLHdCQUF3QixFQUFFO0FBQzFCLGNBQWMsRUFBRTtBQUNoQiw0QkFBNEIsRUFBRTtBQUM5QixpQkFBaUIsRUFBRTtBQUNuQiw2QkFBNkIsRUFBRTtBQUMvQixvQ0FBb0MsRUFBRTtBQUN0QyxxQkFBcUIsRUFBRTtBQUN2QixpQ0FBaUMsRUFBRTtBQUNuQyx3QkFBd0IsRUFBRTtBQUMxQixzQkFBc0IsRUFBRTtBQUN4QixnQkFBZ0IsRUFBRTtBQUNsQixxQkFBcUIsRUFBRTtBQUN2QixtQkFBbUIsRUFBRTtBQUNyQiwwQkFBMEIsRUFBRTtBQUM1QixjQUFjLEVBQUU7QUFDaEIsZ0JBQWdCLEVBQUU7QUFDbEIsb0NBQW9DLEVBQUU7QUFDdEMsNkJBQTZCLEVBQUU7QUFDL0IscUJBQXFCLEVBQUU7QUFDdkIsdUNBQXVDLENBQUU7QUFBQSxDQUMxQyxDQUFDLENBQ0Y7QUFDTyxJQUFJRSxZQUF3QixHQUFBRCxPQUFBLENBQUFDLFlBQUEsR0FBRyxFQUFFLENBQ2pDLE1BQU1DLFFBQVEsR0FBQUYsT0FBQSxDQUFBRSxRQUFBLEdBQUcsRUFBRSxDQUNuQixNQUFNQyxZQUFZLEdBQUFILE9BQUEsQ0FBQUcsWUFBQSxHQUFHLElBQUlDLG9CQUFZLENBQUMsQ0FBQyxDQUV2QyxTQUFTQyxvQkFBb0JBLENBQUNDLE9BQWUsRUFBUSxDQUMxRCxNQUFNQyxRQUFRLEdBQUdOLFlBQVksQ0FDN0IsT0FBT0EsWUFBWSxDQUFDSyxPQUFPLENBQUMsQ0FDNUJOLE9BQUEsQ0FBQUMsWUFBQSxHQUFBQSxZQUFZLEdBQUdNLFFBQVEsQ0FDekIiLCJpZ25vcmVMaXN0IjpbXX0=