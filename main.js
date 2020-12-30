canvas=document.getElementById("canvas1");

ctx = canvas.getContext("2d");

car_width = 100;

car_height = 90;

background_image= "download (2).jpg";

car_image = "download.jpg";

car_x = 10; 

car_y = 10;

car_image2 = "download (1).jpg";

car2_x = 10; 

car2_y = 10;

function add() { background_img1= new Image(); 

background_img1.onload=uploadbackground;

 background_img1.src=background_image;

rover_img1= new Image();

car_img1.onload=carground;
 
car_img1.src=car_image;

car_img2.onload=car2ground;
 
car_img2.src=car_image;
}

function uploadbackground() { ctx.drawImage(background_img1 , 0 , 0,canvas.width,canvas.height);

 } function carground() { ctx.drawImage(car_img1 , car_x , car_y,car_width,car_height);

 }