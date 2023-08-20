import { IpcRendererEvent } from 'electron';
import { ReadFile, WriteFile } from '../models/file';

export interface IElectronAPI {
  handleFileOpen: (
    callback: (event: IpcRendererEvent, file: ReadFile) => void,
  ) => void;
  handleFileSave: (callback: (event: IpcRendererEvent) => void) => void;
  saveExistingFile: (file: WriteFile) => void;
  saveNewFile: (content: string) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
