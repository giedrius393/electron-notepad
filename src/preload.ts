// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import {
  EXISTING_FILE_SAVED,
  FILE_SELECTED,
  NEW_FILE_SAVED,
  SAVE_FILE,
} from './constants';

contextBridge.exposeInMainWorld('electronAPI', {
  handleFileOpen: (
    callback: (event: IpcRendererEvent, ...args: any[]) => void,
  ) => ipcRenderer.on(FILE_SELECTED, callback),
  handleFileSave: (
    callback: (event: IpcRendererEvent, ...args: any[]) => void,
  ) => ipcRenderer.on(SAVE_FILE, callback),
  removeFileSaveHandler: () => ipcRenderer.removeAllListeners(SAVE_FILE),
  saveExistingFile: (...args: any[]) =>
    ipcRenderer.send(EXISTING_FILE_SAVED, ...args),
  saveNewFile: (...args: any[]) => ipcRenderer.send(NEW_FILE_SAVED, ...args),
});
