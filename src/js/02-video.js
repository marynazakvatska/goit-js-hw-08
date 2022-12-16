/* import throttle from 'lodash.throttle'; */
import Player from '@vimeo/player';


const STORAGE_KEY = "videoplayer-current-time";

const player = new Player('handstick', {
    /* id: "vimeo-player",  */
    url: "https://player.vimeo.com/video/236203659",
    width: 640
});

player.on('timeupdate', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime))
} );
/* 
function setCurrentTime() {
    localStorage.getItem(STORAGE_KEY);
} */
/* Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
 */