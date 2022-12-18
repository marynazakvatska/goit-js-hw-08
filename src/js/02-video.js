
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = "videoplayer-current-time";
const videoEl = document.querySelector("iframe")
console.log(videoEl)

const player = new Player(videoEl);

 player.setCurrentTime(Object.values(JSON.parse(localStorage.getItem(STORAGE_KEY)))[0])

console.log(localStorage.getItem(STORAGE_KEY))
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
console.log(Object.keys(JSON.parse(localStorage.getItem(STORAGE_KEY))))
console.log(Object.values(JSON.parse(localStorage.getItem(STORAGE_KEY)))[0])


player.on('timeupdate', throttle(function(currentTime) {
    console.log(currentTime)
    localStorage.setItem(STORAGE_KEY,  JSON.stringify(currentTime) )
}, 1000) );




/* Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
 */