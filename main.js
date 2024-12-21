let btn = document.getElementById('btn')
let root = document.getElementById('root')
btn.addEventListener('click', function(e){
    e.preventDefault()
    let user = document.getElementById('user')
    let id = user.value
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        
        root.innerHTML += `<div class="card"><h1>${user.name}</h1> <h1>${data.username}</h1> <h1>${data.phone}</h1></div>`
    })
})