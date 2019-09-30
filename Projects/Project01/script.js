function getData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange= ()=> {
        if(this.readyState ==4 && this.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let users = response.users;
            let display = '';
            for(i=0; i < people.length; i++) {
                display = '<p>' +users[i].name+'</p>';
            }
            selector = document.getElementsById('selector');
            selector.innerHTML = display;
        }
        xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
        xhr.send();
    }
}

