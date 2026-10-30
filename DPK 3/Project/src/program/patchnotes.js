import { createWindow } from "../modules/windowFactory.js";

const updates = [
    {
        version: "v0.2.0",
        date: "30/10/2026",
        changes: ["Update Jum'at 30 OCTOBER", "patchnotes test"],
    },
];

export function renderPatchNotes() {
    const contentHTML = updates
        .map(
            update => `
        <div class="patch-entry">
            <h4 class="patch-version-title">
                ${update.version} <span class="patch-date">- ${update.date}</span>
            </h4>
            <ul class="patch-list">
                ${update.changes.map(change => `<li>${change}</li>`).join("")}
            </ul>
            <hr class="patch-separator">
        </div>
    `,
        )
        .join("");

    const menuHTML = `
        <div class="menu-item">File</div>
        <div class="menu-item">Edit</div>
        <div class="menu-item">Search</div>
        <div class="menu-item">Help</div>
    `;

    createWindow({
        id: "window-patchnotes",
        title: "Patch Notes",
        menuBar: menuHTML,
        content: `<div class="patch-notes-area">${contentHTML}</div>`,
        isCentered: true,
    });
}
