"use strict";

{
    // callMap path/c3runtime/type.js

    const C3 = globalThis.C3;
    C3.Plugins.EdwardBonnett_VsCodePlugin.Type = class SingleGlobalType extends globalThis.ISDKObjectTypeBase {
        constructor() {
            super();
        }
        _onCreate() {
        }
    };
}