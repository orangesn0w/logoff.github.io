function Login() {

    FB.login(function (response) {
        if (response.authResponse) {
            getUserInfo(); // Get User Information.
            Facebook();

        } else {
            console.log('Authorization failed.');
        }
    }, {
        scope: 'email'
    });

}

function getUserInfo() {
    FB.api('/me', function (response) {

        //response.name       - User Full name
        //response.link       - User Facebook URL
        //response.username   - User name
        //response.id         - id
        //response.email      - User email

    });
}
FB.Event.subscribe('auth.authResponseChange', function (response) {
    if (response.status === 'connected') {
        //SUCCESS
    } else if (response.status === 'not_authorized') {
        //FAILED
    } else {
        //UNKNOWN ERROR. Logged Out
    }
});


function Facebook() {
    alert('hello');
    FB.logout(function () {
        document.location.reload();
    });

}

function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 || idElement === 2) {
        if (element.innerHTML === 'Facebook') element.innerHTML = 'Loading';
        else {
            element.innerHTML = 'Facebook';
        }
    }
}