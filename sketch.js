var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,100,100);
 
  
}

function draw() 
{
 

  
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
if(keyWentDown("Right_Arrow")) {
  box.x=box.x+7
  background("red");
}
if(keyWentUp("Right_Arrow")){
  background("green")

}
//background("green")
drawSprites();
}

 

  

  


