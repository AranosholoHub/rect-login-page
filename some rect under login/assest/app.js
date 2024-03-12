let password_input = document.getElementById("password");
let username_input = document.getElementById("username_input");
let username_value = document.forms['form']['username'].value.lenght;
let password_value = document.forms['form']['password'].value.lenght;
let form = document.getElementById("myform")
let drop_position_left = document.getElementById("drop_position_left");
let drop_position_right = document.getElementById("drop_position_right");
let drop_position_near_password = document.getElementById("drop_position_near_password");
let drop_position_top_right = document.getElementById("drop_position_top_right");
let drop_position_bottom_right = document.getElementById("demo");
// lets beginning left
let x_position_left = -5.3;
let y_position_left = -19.3;
let x_position_back_left = -5;
let y_position_back_left = -19;
//lets beginning right
let x_position_right = 20.3;
let y_position_right = -20.3;
let y_position_back_right = -20;
let x_position_back_right = 20;
//lets beginning near password
let x_position_near_password = 3.3;
let y_position_near_password = -2.3;
let x_position_near_password_back = 3;
let y_position_near_password_back = -2;
//lets beginning top right adlia
let x_position_top_right = 20.8;
let y_position_top_right = 0.6;
let x_position_top_right_back = 20.5;
let y_position_top_right_back = 0.3;
//lets beginning bottom right
let x_position_bottom_right = 19.2;
let y_position_bottom_right = 11.3;
let y_position_bottom_right_back = 11;
let x_position_bottom_right_back = 18.9;
form.addEventListener("mouseenter", function () {
    drop_position_left.style.marginLeft = x_position_left + 'em';
    drop_position_left.style.marginTop = y_position_left + 'em';
    drop_position_right.style.marginLeft = x_position_right + 'em';
    drop_position_right.style.marginTop = y_position_right + 'em'
    drop_position_near_password.style.marginLeft = x_position_near_password + 'em';
    drop_position_near_password.style.marginTop = y_position_near_password + 'em';
    drop_position_top_right.style.marginLeft = x_position_top_right + 'em';
    drop_position_top_right.style.marginTop = y_position_top_right + 'em';
    drop_position_bottom_right.style.marginLeft = x_position_bottom_right + 'em';
    drop_position_bottom_right.style.marginTop = y_position_bottom_right + 'em';
    //for the animation exit
});
form.addEventListener("mouseout", function () {
    drop_position_left.style.marginLeft = x_position_back_left + 'em';
    drop_position_left.style.marginTop = y_position_back_left + 'em';
    drop_position_right.style.marginLeft = x_position_back_right + 'em';
    drop_position_right.style.marginTop = y_position_back_right + 'em';
    drop_position_near_password.style.marginTop = y_position_near_password_back + 'em';
    drop_position_near_password.style.marginLeft = x_position_near_password_back + 'em';
    drop_position_top_right.style.marginTop = y_position_top_right_back + 'em';
    drop_position_top_right.style.marginLeft = x_position_top_right_back + 'em';
    drop_position_bottom_right.style.marginTop = y_position_bottom_right_back + 'em';
    drop_position_bottom_right.style.marginLeft = x_position_bottom_right_back + 'em';
    //for the animation adding
});

let eye = document.getElementById("eye");
let eye_slash = document.getElementById("eye_close");
eye_slash.addEventListener("click", function () {
    eye_slash.style.display = "none";
    eye.style.display = 'block';
    if (password_input.type == 'password') {
        password_input.type = 'text'
    }
});

eye.addEventListener("click", function () {
    eye.style.display = 'none';
    eye_slash.style.display = "block";
    if (password_input.type == "text") {
        password_input.type = 'password';
    }
});
let law = ["fock", "bad", "bolony", "ass", "pussy", "dick"];
let characters = ["!", "@", "#", "%", "&", "$"]
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username_value < 5 && username_value.includes(law)) {
        username_input.style.background = 'rgba(255, 0, 0, 0.45)';
        username_input.focus();
        return false;
    }

    if (password_value < 6 && !password_value.includes(characters)) {
        password_input.style.background = 'rgba(255, 0, 0, 0.45)';
        username_input.focus();
        return false;
    }
});

username_input.addEventListener("textInput", function () {
    if (username_value > 5 && !username_value.includes(law)) {
        username_input.style.background = '#0000003a';
        username_input.focus();
        return false;
    }
});

username_input.addEventListener("textInput", function () {
    if (password_value > 6 && password_value.includes(characters)){
        password_input.style.background = '#0000003a'
        password_input.focus();
        return false;
    }
})