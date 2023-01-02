const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }

// xhr.onload = function(){
//     // console.log(xhr.readyState);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }


// error handling
xhr.onload = () => {
    if(xhr.status >=200 && xhr.status < 300){
        const response = xhr.response;
        const data = JSON.parse(response);

        const id = data[3].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = URL + "/" + id;
        xhr2.open("GET", URL2);
        xhr2.onload = () =>{
            const data2 = JSON.parse(xhr2.response);
            console.log(data2)
        }
        xhr2.send();
    }
    else{
        console.log("Something went wrong");
    }
}

xhr.onerror = () => {
    console.log("Network error");
}
xhr.send();