# Nexus Client Website

Статический сайт для Nexus Client, готовый для GitHub Pages.

## Файлы
- `index.html` — главная страница.
- `style.css` — дизайн.
- `script.js` — ссылка на будущий JAR-релиз.

## GitHub Pages
Загрузите эти файлы в корень отдельного репозитория и включите:
**Settings → Pages → Deploy from a branch → main → / (root)**.

Когда появится релиз `.jar`, откройте `script.js` и укажите URL файла в `RELEASE_JAR_URL`.
