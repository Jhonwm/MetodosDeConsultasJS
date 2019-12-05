//Metodo Usando Fetch para la consulta
const getNombre = (idPost) => {
   
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => {
       return res.json()
    })
    .then(post =>{
        console.log(post.userId);
        fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => {
            return res.json()
        })
        .then(user => {
            console.log(user.name);
        })
    })

}
getNombre(80);


//En el siguiente metodo simplificamos el primer Bloque de Codigo utilizando Async Await

const getNombreAsync = async (idPost) => {

        try {
            const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
            const post = await resPost.json();
            const resUser = await  fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
            const user = await resUser.json();
            console.log(user.name);
            
        } catch (error) {
            console.log(error);
        }
}

getNombreAsync(80);


//Acontinuacion Simplificamos aun mas el 2do bloque de Codigo, utilizando la libreria
//Axios, la cual declaramos en el index.html
const getNombreAxios = async (idPost) => {

    try {
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const resUser = await axios(`http://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser.data.name);
        
    } catch (error) {
        console.log(error);
    }
}

getNombreAxios(80);