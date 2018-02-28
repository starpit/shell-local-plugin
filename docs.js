/*
 * Copyright 2018 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { title, overall:header, invoke, debug, kill, init, clean } = require('./strings')

/**
 * Docs for the plugin - total four commands
 *
 */
module.exports = {
    main: {
        title,
        header,
        example: 'local <command>',
        commandPrefix: 'local',
        available: [{ command: 'invoke', docs: invoke, partial: '<action|activationId>' },
                    { command: 'debug', docs: debug, partial: '<action|activationId>' },
                    { command: 'init', docs: init, partial: '<action>' },
                    { command: 'kill', docs: kill, partial: true },      // this
                    { command: 'clean', docs: clean, partial: true }     // and this are dangerous, so make them partial
                   ],
        related: ['help']
    },
    invoke: 'local invoke <action|activationId> [-p param value]',
    debug: 'local debug <action|activationId> [-p param value]',
    init: 'local init <action>',
    kill: 'local kill',
    clean: 'local clean'
}
