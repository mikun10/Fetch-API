fetch("https://github.com/mikun10",{
    method:"POST",
    headers:{
        'content-type' : 'application/json'
    },
    body: JSON.stringify({
        name:"user1"
    })
}).then( response => response.json())
.then( json => console.log(json))
.catch( err = console.log(err));
