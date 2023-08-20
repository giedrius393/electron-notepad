// Template for app menu bar
import {
  Menu,
  app,
  MenuItemConstructorOptions,
  BrowserWindow,
  dialog,
} from 'electron';
import * as process from 'process';
import * as fs from 'fs';

const isMac = process.platform === 'darwin';

export const getTemplate = (
  mainWindow: BrowserWindow,
): MenuItemConstructorOptions[] => {
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        isMac ? { role: 'close' } : { role: 'quit' },
        {
          label: 'Open',
          accelerator: 'CmdOrCtrl+O',
          click: async () => {
            const response = await dialog.showOpenDialog(mainWindow, {
              filters: [
                { name: 'Text Files', extensions: ['txt'] },
                { name: 'All Files', extensions: ['*'] },
              ],
            });
            if (response.filePaths && response.filePaths.length > 0) {
              const fileContent = fs.readFileSync(response.filePaths[0]);

              mainWindow.webContents.send('file-selected', {
                content: fileContent,
                path: response.filePaths[0],
              });
            }
          },
        },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click: () => mainWindow.webContents.send('save-file'),
        },
      ],
    },
    {
      role: 'editMenu',
    },
  ];

  if (isMac) {
    template.unshift({
      label: app.name,
      submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'quit' }],
    });

    return template;
  }
};

export const getMenu = (mainWindow: BrowserWindow) =>
  Menu.buildFromTemplate(getTemplate(mainWindow));
