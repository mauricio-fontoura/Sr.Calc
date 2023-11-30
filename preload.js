const { contextBridge } = require("electron")

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.version.chrome,
    electron: () => process.versions.electron
});

/*

Adicione um novo script preload.js que expõe propriedades selecionadas do objeto process.versions do Electron ao processo renderizador em uma variável global de versões.

*/