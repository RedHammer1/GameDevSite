


//Для списка сайт для мобильных устройств - нужно добавить ресайзинг
function ShowElem(str, element) {
    const div = document.getElementById(str);

    if (div.value == 1) { 
        div.style.display = 'none'; 
        element.style.transform = 'rotate(180deg)';
        div.value = 0; 
    }
    else {
        
        div.style.display = 'block'; 
        element.style.transform = 'rotate(-90deg)';
        div.value = 1;
     }
}

function Rotate(str, element) {
    const div = document.getElementById(str);

    if (div.value == 1) { 
        element.style.transform = 'rotate(180deg)';
    }
    else {
        element.style.transform = 'rotate(-90deg)';
     }
}


function showFlexPopup(str) {
    var popup = document.getElementById(str);
    popup.style.display = "flex";
}

function hidePopup(str) {
    var popup = document.getElementById(str);
    popup.style.display = "none";
}


function SearchBox() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}






