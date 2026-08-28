// Put the final GitHub Release JAR URL here when the client is published.
const RELEASE_JAR_URL = '';
const button = document.getElementById('downloadBtn');
if (RELEASE_JAR_URL) {
  button.href = RELEASE_JAR_URL;
  button.textContent = 'Скачать .JAR';
  button.removeAttribute('aria-disabled');
} else {
  button.addEventListener('click', (event) => event.preventDefault());
}
