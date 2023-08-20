import { ipcMain } from 'electron';
import * as fs from 'fs';
import { WriteFile } from './models/file';

ipcMain.on('existing-file-saved', (event, file: WriteFile) => {
  try {
    fs.writeFileSync(file.path, file.content);
  } catch (err) {
    console.log(err);
  }
});
