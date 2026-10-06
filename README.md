# Сайт Риммы Сковородниковой — GitHub Pages

## Что заменить
1. `js/config.js` — ссылки на **ВК** и **MAX** (остальные уже стоят).
2. `assets/img/rimma.jpg` — портрет (вертикальный 4:5, от 1000 px по ширине, до 400 КБ). Пока файла нет — показывается красивая заглушка.
3. `assets/video/zagran.mp4` — видео агентства; `assets/img/zagran-poster.jpg` — обложка (по желанию).

## Видео
GitHub не принимает файлы больше 100 МБ, для сайта лучше до 25–30 МБ. Сжать (ffmpeg):
`ffmpeg -i input.mov -vcodec libx264 -crf 26 -preset slow -vf "scale=-2:720" -acodec aac -b:a 128k -movflags +faststart zagran.mp4`
Формат горизонтальный или вертикальный — рамка подстроится сама.

## Публикация
1. github.com → New repository (Public), например `rimma`.
2. Загрузить всё содержимое папки (включая `.nojekyll`): Add file → Upload files.
3. Settings → Pages → Branch: `main` / root → Save.
4. Через 1–2 минуты сайт на `https://ВАШ-НИК.github.io/rimma/`.
