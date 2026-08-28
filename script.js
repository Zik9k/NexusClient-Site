const RELEASE_JAR_URL =
  "https://github.com/Zik9k/NexusClient-Site/releases/download/v10.0.0/NexusClient-10.0.0.jar";

const button = document.getElementById("downloadBtn");

if (button) {
  button.href = RELEASE_JAR_URL;
  button.textContent = "Скачать Nexus Client 10.0.0";
  button.removeAttribute("aria-disabled");
  button.removeAttribute("target");
}
