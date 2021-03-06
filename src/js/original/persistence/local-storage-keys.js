/**
 * Copyright 2016 Google Inc.
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
 */
goog.provide('audioCat.persistence.LocalStorageKeys');


/**
 * Enumerates keys used for local storage. Increment the symbol below after
 * adding a new key to maintain unique keys. Note: You are encouraged to use the
 * "namespace-key" format instead of values from this enum.
 * Next available key: 'b'
 * @enum {string}
 */
audioCat.persistence.LocalStorageKeys = {
  LICENSE_REGISTERED: 'a' // Whether the user registered a license.
};
