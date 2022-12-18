import throttle from 'lodash.throttle'; 


/* Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
 В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle. */

const STORAGE_KEY ="feedback-form-state"

const form = document.querySelector('form')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')


form.addEventListener('submit', onSubmitForm);


throttle(update(), 500)


  function onSubmitForm(e)  {
    e.preventDefault()

      const elementsEl = e.currentTarget.elements
      const email = elementsEl.email.value;
    const message = elementsEl.message.value;
    console.log(email, message)

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
    const saveInfo = JSON.parse(localStorage.getItem(STORAGE_KEY))
    console.log(saveInfo)

    
      e.currentTarget.reset();
     removeItemStor()
  
  }


function removeItemStor() {
  localStorage.removeItem(STORAGE_KEY)
}

function update() {
  const objectForUpdate = JSON.parse(localStorage.getItem(STORAGE_KEY)) 
  console.log(objectForUpdate)
  if (objectForUpdate) {
    input.value = objectForUpdate.email 
    textarea.value = objectForUpdate.message
  }
}



/* 

const formData = {};

updateForm()


form.addEventListener('submit', e => {
 console.log(e.target.name);
 console.log(e.target.value);

  formData[e.target.name] = e.target.value;

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
 
  
  const objectForSave = JSON.parse(JSON.stringify(formData))
    console.log(objectForSave)

 e.currentTarget.reset();
     removeItemStor() 
 });


function removeItemStor() {
  localStorage.removeItem(STORAGE_KEY)
} 

function updateForm() {

  const message = localStorage.getItem(STORAGE_KEY)
  if (message) {
   formData = message
 }

}  */
