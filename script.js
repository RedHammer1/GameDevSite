


function ShowElem(str) {
    var popup = document.getElementById(str);

    popup.style.display = "block";
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






