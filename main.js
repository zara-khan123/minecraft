var canvas = new fabric.Canvas('myCanvas');
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToWidt(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
    
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e)
    {
        keyPressed=e.keyCode;
        if(keyPressed == '38'){
       block_width= block_width + 10;
       block_height=block_height +10;
       console.log(block_width, block_height);
       document.getElementById("current_width").innerHTML = block_width;
       document.getElementById("current_height").innerHTML = block_height;
        }
        if(keyPressed == '40'){
     block_width= block_width -  10;
    block_height=block_height - 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if(keyPressed == '50'){
    up();

}
if(keyPressed == '113'){
    down();
    
}
if(keyPressed == '51'){
    right();
    
}
if(keyPressed == '49'){
    left();
    
}
if(keyPressed == '87'){
    new_image('wall.jpg');

}
if(keyPressed == '84'){
    new_image('trunk.jpg');
    
}
if(keyPressed == '71'){
    new_image('ground.png');
    
}
if(keyPressed == '76'){
    new_image('light_green.png');
    
}
if(keyPressed == '82'){
    new_image('roof.jpg');

    
}
if(keyPressed == '89'){
    new_image('yellow_wall.png');
    
    
}
if(keyPressed == '68'){
    new_image('dark_green.png');
    
    
}
if(keyPressed == '85'){
    new_image('unique.png');
    
}   
if(keyPressed == '83'){
    new_image('stone.jpg');
    
}   

}   
    