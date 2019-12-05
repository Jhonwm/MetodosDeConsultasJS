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