import { dialog, ipcMain } from 'electron';
import * as fs from 'fs';
import { WriteFile } from './models/file';
import { EXISTING_FILE_SAVED, NEW_FILE_SAVED } from './constants';

ipcMain.on(EXISTING_FILE_SAVED, (event, file: WriteFile) => {
  try {
    fs.writeFileSync(file.path, file.content);
  } catch (err) {
    console.log(err);
  }
});

ipcMain.on(NEW_FILE_SAVED, async (event, content: string) => {
  const fileName = await dialog.showSaveDialog({
    filters: [{ name: 'Text Files', extensions: ['txt'] }],
  });

  if (!fileName.canceled) {
    try {
      fs.writeFileSync(fileName.filePath, content);
    } catch (err) {
      console.log(err);
    }
  }
});
