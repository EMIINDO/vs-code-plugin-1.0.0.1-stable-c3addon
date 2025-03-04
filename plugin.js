"use strict";
// Porting BY EMI INDO with c3addon-ide-plus

{
    const SDK = globalThis.SDK;

    ////////////////////////////////////////////
    // The plugin ID is how Construct identifies different kinds of plugins.
    // *** NEVER CHANGE THE PLUGIN ID! ***
    // If you change the plugin ID after releasing the plugin, Construct will think it is an entirely different
    // plugin and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE PLUGIN.
    // Only the plugin name is displayed in the editor, so to rename your plugin change the name but NOT the ID.
    // If you want to completely replace a plugin, make it deprecated (it will be hidden but old projects keep working),
    // and create an entirely new plugin with a different plugin ID.
    const PLUGIN_ID = "EdwardBonnett_VsCodePlugin";
    ////////////////////////////////////////////

    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.1";
    const PLUGIN_CATEGORY = "other";

    const PLUGIN_CLASS = SDK.Plugins.EdwardBonnett_VsCodePlugin = class MyCustomPlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(self.lang(".name"));
            this._info.SetDescription(self.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Edward Bonnett");
            this._info.SetHelpUrl(self.lang(".help-url"));
            this._info.SetIsSingleGlobal(true);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
            ]);



            SDK.Lang.PopContext();		// .properties

            SDK.Lang.PopContext();
        }


    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}