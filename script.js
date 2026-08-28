const DOWNLOAD_URL =
"https://github.com/Zik9k/NexusClient-Site/releases/download/v10.0.0/NexusClient-10.0.0.jar";

document.addEventListener("DOMContentLoaded", () => {
const buttons = document.querySelectorAll(".download-button");

buttons.forEach((button) => {
button.href = DOWNLOAD_URL;
button.removeAttribute("aria-disabled");
button.removeAttribute("target");
button.removeAttribute("onclick");
});
});
