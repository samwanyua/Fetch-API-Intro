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