document.getElementById('getText').addEventListener('click', getText);

function getText(){
    // console.log('I have been clicked');
    fetch('sample.txt')
    .then(res => {
        // console.log(res.text());
        return res.text();
    })
    .then(data => {
        console.log(data)
        // Insert data into the DOM
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log("Error"));

}

document.getElementById('getUsers').addEventListener('click', getUsers);

function getUsers(){
    fetch('users.json')
    .then(res => res.json())
    .then(data => {
        let outPut = `<h2>Users</h2>`;
        // console.log(data);
        data.forEach(user => {
            //to append
            outPut += `
            <ul>
                <li> ID: ${user.id}</li>
                <li> ID: ${user.name}</li>
                <li> ID: ${user.email}</li>
            </ul>
            
            `
        });
        document.getElementById('output').innerHTML = outPut;

    })

}

document.getElementById('getposts').addEventListener('click', getPosts);

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        let outcome = `<h2>Posts</h2>`;
        data.forEach(post => {
            outcome += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `
        });
        document.getElementById('getposts').innerHTML = outcome;
    });
}

document.getElementById('addPost').addEventListener('submit', addPost);

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body: body})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })


}

