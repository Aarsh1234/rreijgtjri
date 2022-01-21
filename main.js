canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=70;
rover_x=38;
rover_y=50;
background_img="mars.jpg";
rover_image="rover.png";
function add()
{
    background_img_tag=new Image();
    background_img_tag.onload=upload_background;
    background_img_tag.src=background_img;

    rover_img_tag=new Image();
    rover_img_tag.onload=upload_rover;
    rover_img_tag.src=rover_image;
}
function upload_background()
    {
      ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
    }
    function upload_rover()
    {
      ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
    }
    window.addEventListener("keydown", my_keydown);
    function my_keydown(e)
    {
        key_pressed=e.keyCode;
        console.log(key_pressed);
        if (key_pressed=="38")
        {
            up();
            console.log("up");
        }
        if (key_pressed=="40")
        {
            down();
            console.log("down");
        }
        if (key_pressed=="37")
        {
            left();
            console.log("left");
        }
        if (key_pressed=="39")
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
            console.log("up pressed, x= "+rover_x+", y= "+rover_y);
            upload_background();
            upload_rover();
        }
    }
    function left()
    {
        if (rover_x>0)
        {
            rover_x=rover_x-10;
            console.log("left pressed, x= "+rover_x+ ", y= "+rover_y);
            upload_background();
                upload_rover();
        }
    }
    function down()
    {
        if (rover_y<=500)
        {
            rover_y=rover_y+10;
            console.log("down pressed, x= "+rover_x+", y= "+rover_y);
            upload_background();
            upload_rover();
        }
    }
    function right()
    {
        if (rover_x<=700)
        {
            rover_x=rover_x+10;
            console.log("right pressed, x= "+rover_x+ ", y= "+rover_y);
            upload_background();
                upload_rover();
        }
    }
    array_img=["img_1.jpeg", "img_2.jpeg", "img_3.jpeg", "img_4.jpeg"];
    random_number=Math.floor(Math.random()*4);
    background_img=array_img[random_number];
    console.log("background_img"+background_img);