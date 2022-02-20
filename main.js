canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

images_array=["marsimg1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];

random_number=Math.floor(Math.random()*5);
console.log(random_number);

rover_height=90;
rover_width=100;

background_image=images_array[random_number];
console.log("background image="+background_image);

rover_image="rover.png";
rover_x=10;
rover_y=10;

function add()
{
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;

   rover_img=new Image();
   rover_img.onload=uploadrover;
   rover_img.src=rover_image;

}

function uploadBackground()
{
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);

}  

window.addEventListener("keydown", my_keydown);
 function my_keydown(e)
  { keyPressed = e.keyCode;
     console.log(keyPressed);
      if(keyPressed == '38')
       {
            up(); 
            console.log("up");

     }
      if(keyPressed == '40') 
      { down();
         console.log("down");
     } 
     if(keyPressed == '37') 
     { left();
     console.log("left");
     } 
     if(keyPressed == '39')
      {
           right();
            console.log("right"); 
    } 
}
 function up()
 {
     if (rover_y>=0)
     {
         rover_y=rover_y-10;
         console.log("when up arrow is pressed, x= "+rover_x +" and y= "+rover_y);
         uploadBackground();
         uploadrover();
     }
 }

 function down()
 {
     if (rover_y<=500)
     {
         rover_y=rover_y+10;
         console.log("when down arrow is pressed, x= "+rover_x +" and y= "+rover_y);
         uploadBackground();
         uploadrover();
     }
 }

 function left()
 {
     if (rover_x>=0)
     {
         rover_x=rover_x-10;
         console.log("when left arrow is pressed, x= "+rover_x +" and y= "+rover_y);
         uploadBackground();
         uploadrover();
     }
 }

 function right()
 {
     if (rover_x<=700)
     {
         rover_x=rover_x+10;
         console.log("when right arrow is pressed, x= "+rover_x +" and y= "+rover_y);
         uploadBackground();
         uploadrover();
     }
 }