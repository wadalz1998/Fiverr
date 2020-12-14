var items = document.getElementsByClassName("list-group-item");
for (var i = 0; i < items.length; i++) {
   if ((' ' + items[i].className + ' ').indexOf(' active ') > -1){         
        items[i].setAttribute('class', 'fas fa-check');
   }
//    else 
//        items[i].setAttribute('style', 'color: #CCC');
}