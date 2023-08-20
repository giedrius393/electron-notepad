// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  handleFileOpen: (
    callback: (event: IpcRendererEvent, ...args: any[]) => void,
  ) => ipcRenderer.on('file-selected', callback),
});
