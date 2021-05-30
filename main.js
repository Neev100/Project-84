canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_height = 70;
car1_width = 120;
car1_x = 10;
car1_y = 10;

car2_height = 70;
car2_width = 120;
car2_x = 10;
car2_y = 100;

background_img = "car race background.jpg";
car1_img = "car1.png";
car2_img = "car2.png";

function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_img;

    car1_img_tag = new Image();
    car1_img_tag.onload = uploadCar1;
    car1_img_tag.src = car1_img;

    car2_img_tag = new Image();
    car2_img_tag.onload = uploadCar2;
    car2_img_tag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);

}
function uploadCar1() {
    ctx.drawImage(car1_img_tag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2() {
    ctx.drawImage(car2_img_tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38") {
        up();
        console.log("up");
    }
    if (keypressed == "40") {
        down();
        console.log("down");
    }
    if (keypressed == "37") {
        left();
        console.log("left");
    }
    if (keypressed == "39") {
        right();
        console.log("right");
    }
    if (keypressed == "65") {
        a();
        console.log("a");
    }
    if (keypressed == "83") {
        s();
        console.log("s");
    }
    if (keypressed == "68") {
        d();
        console.log("d");
    }
    if (keypressed == "87") {
        w();
        console.log("w");
    }
}
