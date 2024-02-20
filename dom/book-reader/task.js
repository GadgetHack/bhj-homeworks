const fontSizes = document.querySelectorAll('.font-size');
fontSizes.forEach(function(fontSize){
  fontSize.addEventListener('click', function(event){
    event.preventDefault();

    fontSizes.forEach(function(item){
      item.classList.remove('font-size_active');
    });

    this.classList.add('font-size_active');

    const newSize = this.getAttribute('data-size');

    const bookElement = document.getElementById('book');

    bookElement.classList.remove('book_fs-big', 'book_fs-small');

    if(newSize === 'big'){
      bookElement.classList.add('book_fs-big');
    } else if (newSize === 'small'){
      bookElement.classList.add('book_fs-small');
    }
  });
});

const textColors = document.querySelectorAll('.book__control_color .color');

textColors.forEach(function(textColor){
  textColor.addEventListener('click', function(event){
    event.preventDefault();

    textColors.forEach(function(item){
      item.classList.remove('color_active');
    });

    this.classList.toggle('color_active');

    const newColor = this.getAttribute('data-text-color');

    const book = document.getElementById('book');

    book.classList.remove('book_color-gray');
    book.classList.remove('book_color-whitesmoke');
    book.classList.remove('book_color-black');
 
    book.classList.add('book_color-'+ newColor);
  });
});

const bgColors = document.querySelectorAll('.book__control_background .color');

bgColors.forEach(function(bgColor){
  bgColor.addEventListener('click', function(event) {
    event.preventDefault();

    bgColors.forEach(function(item){
      item.classList.remove('color_active');
    });

    this.classList.add('color_active');

    const newBgColor = this.getAttribute('data-bg-color');
    const book = document.getElementById('book');

    book.classList.remove('book_bg-gray');
    book.classList.remove('book_bg-white');
    book.classList.remove('book_bg-black');
 
    book.classList.add('book_bg-' + newBgColor);
  });
});
