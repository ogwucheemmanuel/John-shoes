
document.getElementById('getuser').addEventListener
('click', getuser);

function getuser() {
    fetch('api.json')
    .then((res) => res.json())
    .then((data) => {
       let output = '<h2>Users</h2>';
       data.forEach(function(user){
           output += `
           Name: ${user.name}
           image: ${user.image}
           `;
       });
       document.getElementById('output').innerHTML = output;
    })
    .catc((err) => console.log(err))
}