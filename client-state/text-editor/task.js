 const textareaElement = document.getElementById('editor');
 
 
 textareaElement.value = localStorage.getItem('editor')

 textareaElement.addEventListener('input', () => {
   localStorage.setItem('editor', textareaElement.value);
 });

 document.getElementById('reset').addEventListener('click',() =>{
  textareaElement.value = '';
  localStorage.removeItem('editor');
 });
 