import { createWindow } from "../modules/windowFactory.js";

export function renderAbout() {
    const menuHTML = `
        <div class="menu-item">File</div>
        <div class="menu-item">Edit</div>
        <div class="menu-item">Search</div>
        <div class="menu-item">Help</div>
    `;

    const bodyHTML = `
    <div class="md-content">
            <h1>About Me</h1>
            
            <h3>Who am I?</h3>
            <br>
            <p>Hello, my name is Syaka Pandu Farghani, I am an IT student at <i>SMK Letris Indonesia 2</i> Pamulang.</p>

            <hr>

            <h3>What are my skills?</h3>
            <br>
            <ul>
                <li><b>Frontend:</b> HTML5, CSS3, JavaScript</li>
                <li><b>Backend:</b> Java, Python</li>
                <li><b>Design:</b> Photoshop</li>
            </ul>

            <hr>

            <h3>My Contacts</h3>
            <br>
            <ul>
                <li>
                    <a href="Syakamargasatwa@gmail.com">Email</a>
                </li>
                <li>
                    <a href="https://github.com/Syakamargasatwa" target="_blank">GitHub</a>
                </li>
            </ul>
            
            <br>
            <p style="text-align: center; color: #888; font-size: 12px;">
                <i>Made with 💙 by Yaggs | Syaka Pandu Farghani</i>
            </p>
        </div>
    `;

    createWindow({
        id: "window-about",
        title: "About Me",
        menuBar: menuHTML,
        content: bodyHTML,
        isCentered: false,
    });
}
