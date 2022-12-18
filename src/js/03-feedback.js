import throttle from 'lodash.throttle'; 


/* Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
 В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle. */

const STORAGE_KEY ="feedback-form-state"

let formData = {};


const form = document.querySelector('form')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')


form.addEventListener('submit', onSubmitForm);
input.addEventListener("input", throttle(onChange, 500));
textarea.addEventListener("input", throttle(onChange, 500))



update()


  function onSubmitForm(e)  {
    e.preventDefault()
     console.log(formData);
   
/*     formData = {} */
      e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY)
  
  }


function onChange(e) {
  console.log(formData[e.target.name])
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function update() {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  if (formData) {
    input.value = formData.email || '';
    textarea.value = formData.message || '';
  }
}



