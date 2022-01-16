import {Config} from "@stencil/core";

export const config: Config = {
    namespace: "app",
    outputTargets: [
        {type: "docs-readme"},
        {
            type: "dist-custom-elements",
            autoDefineCustomElements: true,
            externalRuntime: true,
            dir: "dist",
            includeGlobalScripts: false,
            empty: true
        }
    ]
};
