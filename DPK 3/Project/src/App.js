// Sistem
import { startClock } from './modules/clock.js';
import { initSelectionBox, setuoDesktopIcons } from './modules/desktop.js';
import { openWindow, closeWindow, initWindowListener, minimizeWindow, preRenderWindow} from './modules/windowManager.js';
import { initDraggableWindows } from './modules/drag.js';
import { initStartMenu } from './modules/startMenu.js';
import { runBootSequence } from './modules/boot.js';
import { initLogin } from './modules/login.js';
import { initClippy } from './modules/clippy.js';
import { showFirefoxWarning } from './modules/firefoxWarning.js';

// Wallpaper
import { setWallpaper } from './program/wallpaper,js';
import { setMedia } from './program/mediaplayer.js';

// Global
window.openWindow = openWindow;
window.closeWindow = closeWindow;
window.minimizeWindow = minimizeWindow;

async function initSystem() {
    // Jam
    startClock();

    // BIOS
    await runBootSequence();

    // Konfigurasi
    setWallpaper('eyes');
    setMedia('https://soundcloud.com/headhunter0/02-ordinary-joe-feat-terry');

    // Login Screen
    await initLogin();

    // Clippy
    initClippy();

    // Interface
    initSelectionBox();
    setuoDesktopIcons();
    initWindowListener();
    initDraggableWindows();
    initStartMenu();

    // Render
    preRenderWindow('window-mediaplayer');
    preRenderWindow('window-minesweeper');

    // Firefox warning
    await showFirefoxWarning();

    openWindow('window-about, false');
}

document.addEventListener('DOMContentLoaded', initSystem);

document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.desktop-icon') || !e.target.closest('.desktop-area')) {
        e.preventDefault();
    }
});