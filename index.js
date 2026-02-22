let username

document.getElementById('usernameButton').onclick = function(){
    username = document.getElementById('usernameField').value;
    console.log(username);
    document.getElementById('usernameOut').textContent =  username;
}


