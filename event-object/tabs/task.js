let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab__content');

tabs.forEach(function(tab, index) {
  tab.onclick = function() {
      tabs.forEach(function(tab) {
          tab.classList.remove('tab_active');
      });
      tabContents.forEach(function(content) {
          content.classList.remove('tab__content_active');
      });
      
      tab.classList.add('tab_active');
      tabContents[index].classList.add('tab__content_active');
  };
});
