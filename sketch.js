var boyImage, girlImage;
var gameState = 0;
var bg;
var player;
var coinGroup;
var obstacleGroup;
var coinImage;
var randomcoin = 0;
var canvas;
var trackImage;
var tracks,trackGroup;
var track1,track2,track3;
var spikeImage;
var score=0;
var survivalTime=0;
function preload() {
    //bg = loadImage("images/beginning.png")
    boyImage = loadAnimation("Images/sprite1.png",
        "Images/sprite2.png",
        "Images/sprite3.png",
        "Images/sprite4.png",
        "Images/sprite5.png",
    )
    coinImage = loadImage("Images/coin.png")
    trackImage=loadImage("Images/tracks.jpg")
    spikeImage=loadImage("Images/spike1.png")
}
function setup() {
    canvas = createCanvas(600, 600);
    player = createSprite(200, 500, 10, 10);
    player.addAnimation("boy", boyImage)
    coinGroup = new Group();
    obstacleGroup=new Group();
    trackGroup=new Group();
}
function draw() {
    background("white");
    drawSprites();
fill ("black");
text("Survival Time: "+ survivalTime,510,30)
survivalTime=survivalTime+Math.round(getFrameRate()/60)
fill ("black");
text("Score: "+ score,530,60)
if(coinGroup.isTouching(player))
{
    score=score+5;
    
}
    if (keyDown("A")) {
        player.x = player.x + -3;
    }
    if (keyDown("D")) {
        player.x = player.x + 3;
    }
var select=Math.round(random(1,2));
if(World.frameCount%30===0)
{
    if(select===1)
    {
        spawnCoins();
    }
    else{
        spawnObstacles();
    }
    console.log(select)
}
    
   
    rail();
    
}
function spawnCoins() {
    //write code here to spawn the clouds
    
        randomcoin = Math.round(random(100, 500));
        var coin = createSprite(100, -40, 20, 20);
        coin.addImage(coinImage);
        coin.scale = 0.5;
        coin.lifetime = 150;
       coin.velocityY = +2;
       coinGroup.add(coin)
     pos = Math.round(random(1,3));
     
      if (frameCount % 30 === 0) {
      switch(pos)
      {
          case 1: coin.X=100;
          coin.velocityY=4;
          break;
          case 2: coin.X=300;
          coin.velocityY=4;
          break;
          case 3: coin.X=500;
          coin.velocityY=4;
          break;
          default:
              break;
      }
   


    }
}
function spawnObstacles() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
        randomspike = Math.round(random(70, 470));
        var spike = createSprite(randomspike, 50, 20, 20);
        spike.addImage(spikeImage);
        spike.scale = 0.3;
        spike.velocityY = +4;
       


    }
}
function rail()
{
    if(frameCount%20===0)
    {
        for(var i=0;i<50;i+=50)
        {
            track1=createSprite(100,i,100,10)
            track1.velocityY=4;
            track2=createSprite(300,i,100,10)
            track2.velocityY=4;
            track3=createSprite(500,i,100,10)
            track3.velocityY=4;
            
            trackGroup.add(track1);
            trackGroup.add(track2);
            trackGroup.add(track3);
           

            player.depth=track1.depth;
            track1.depth+=1;
            player.depth=track2.depth;
            track2.depth+=1;
            player.depth=track3.depth;
            track3.depth+=1;
             
        }
    }
}