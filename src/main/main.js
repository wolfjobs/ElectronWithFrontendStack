import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      preload: resolve(__dirname, 'preload.js'),
      spellcheck: false,  // 禁用拼写检查
      autoplayPolicy: 'no-user-gesture-required'  // 允许自动播放
    }
  });
  // 开发环境使用本地服务器
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000');
    // mainWindow.loadURL('https://www.baidu.com');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(resolve(__dirname, '../main/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});