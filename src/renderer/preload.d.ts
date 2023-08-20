import { IpcRendererEvent } from 'electron';

export interface IElectronAPI {
  handleFileOpen: (
    callback: (event: IpcRendererEvent, ...args: any[]) => void,
  ) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
