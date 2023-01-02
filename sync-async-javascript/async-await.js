// async await

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         }
//         else{
//             throw new Error("Something went wrong");
//         }
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.log(error);
//     })

async function getPost(){
    const response = await fetch(URL);
    if(response.ok){
        const data = await response.json();
        return data;
    }
    else{
        throw new Error("Something went wrong");
    }
}

// const myData = getPost();
// console.log(myData);

getPost()
    .then(data => {
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    })