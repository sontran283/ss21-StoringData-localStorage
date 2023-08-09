//  day len localStorage
let data = { id: 1, name: "nguyen van a" };
localStorage.setItem("data", JSON.stringify(data));

//  lay giu lieu ve
let dataGetLocal = JSON.parse(localStorage.getItem("data", data));
console.log(dataGetLocal);

//  nhung giu lieu sau day, thi duoc luu truc tiep
localStorage.setItem("string", "hello word");
localStorage.setItem("number", 100);
localStorage.setItem("boolean", true);
localStorage.setItem("char", 'c');
localStorage.setItem("array", [1, 2, 3, 4]);

//  demo
let obj = {
    student: [
        { id: 1, "name": "john", "age": 22 },
        { id: 1, "name": "john", "age": 22 },
        { id: 1, "name": "john", "age": 22 }
    ]
}
console.log(JSON.stringify(obj));


// JSON.parse (chuyen tu json tuong sang doi tuong)
// JSON.stringify (chuyen tu gia tri sang chuoi)
// lay ve dung parse
// day tu may len dung stringify



//   sessionStorage
//   sessionStorage
sessionStorage.setItem("data", JSON.stringify(data))

// xoa 1 phan tu theo key
// xoa 1 phan tu theo key
// localStorage.removeItem("data");
// localStorage.removeItem("array");
// localStorage.clear();

// sessionStorage.removeItem("data")


//  Cookies
//  Cookies
document.cookie = "username= le ;expires=0"
document.cookie = "username= li ;expires=0"
document.cookie = "password= li ;expires=0"
// lay ra xa xu li cookie
let cookie = document.cookie;
console.log(cookie);
let arrayCookie = cookie.split("; ")
console.log(arrayCookie);
let findIndex = arrayCookie.findIndex((value) => value.startsWith("username="))
console.log(arrayCookie[findIndex].split("=")[1]);