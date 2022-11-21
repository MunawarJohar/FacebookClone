var DropDown = document.querySelector(".dropDown");

var darkbtn = document.getElementById("Dark_btn");

function DropDownToggle() {

    DropDown.classList.toggle("dropDown_max_height");

}

darkbtn.onclick = function() {
    darkbtn.classList.toggle("dark_btn_on");
    document.body.classList.toggle("dark_theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}



if (localStorage.getItem("theme") == "light") {
    darkbtn.classList.remove("dark_btn_on");
    document.body.classList.remove("dark_theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkbtn.classList.add("dark_btn_on");
    document.body.classList.add("dark_theme");

} else {
    localStorage.setItem("theme", "dark");
}

// localStorage.getItem("theme");