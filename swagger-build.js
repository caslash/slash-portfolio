/* eslint-disable @typescript-eslint/no-require-imports */
const { File } = require("undici");

globalThis.File = globalThis.File ?? File;
