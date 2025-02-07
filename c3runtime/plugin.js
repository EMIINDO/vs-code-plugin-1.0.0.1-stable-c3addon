"use strict";

{
    // callMap path/c3runtime/plugin.js

    const C3 = globalThis.C3;
    C3.Plugins.EdwardBonnett_VsCodePlugin = class SingleGlobalPlugin extends globalThis.ISDKPluginBase {
        constructor() {
            super();
        }
    };
}