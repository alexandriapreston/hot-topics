//PRINT P INSTEAD OF USING CONSOLE.LOG EVERYTIME 
//const p = console.log;

// // GET THE REFERENCES
const $container = document.querySelector(".container.info");
const $links = document.querySelectorAll("nav ul li a");
const contents = {};

// USE fetch() TO LOAD home.html ON THE PAGE-LOAD.
// STORE THE LOADED CONTENT INTO contents AS A 
// NEW PROPERTY OF contents WITH THE KEY: 

fetch("./partials/home.html")
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        $container.innerHTML = data;
    })

// CREATE THE FUNCTION 
var storeContents = function (urlVal) {

    if (!contents[urlVal]) {

        fetch(urlVal)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                contents[urlVal] = data;
                $container.innerHTML = contents[urlVal];
            });
    } else {
        $container.innerHTML = contents[urlVal];
    }
};

// CREATE THE FUNCTION THAT WILL HANDLE A LINK-CLICK:
// GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
// CALL THE FUNCTION storeContents PROVIDING THE href
// VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
// OF storeContents FUNCTION.
// CLOSE YOUR FUNCTION handleClick HERE

const handleClick = function (e) {

    e.preventDefault();

    let key = e.target.href;

    storeContents(key);

};

for (let i = 0; i < $links.length; i++) {

    $links[i].addEventListener("click", handleClick);

}
