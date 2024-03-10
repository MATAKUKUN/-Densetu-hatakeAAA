var screen = 0;

for (let i = 0; i < 64; i++) {
  Item.addItem("a")
  
}
Item.addItem("b")
Item.addItem("j")
class BlockData{
    type = ""
    data = [0,0,0,0,0]
    constructor(type){
        this.type = type;
    }
}
class Pos{
    x = 0;
    y = 0;
    constructor(x,y){
        this.x = x
        this.y = y;
    }
}
var grow = new Array(3)
var BlockIndex = new Pos(0,0)
var blockData = new Array(3);
for(var b = 0; b < 100; b++) {
  blockData[b] = new Array(3);
  grow[b] = new Array(3);
  for(var a = 0; a < 100; a++) {
    blockData[b][a] = "g";
    grow[b][a] = 10;
  }
}
class World{
static Camera = new Pos(0,0)
static Player = new Pos(0,0)
static mousePos = new Pos(0,0)
static ItemSlot = 0;
static ShopSlot = 0;
static Gold = 100;
}
document.getElementById("Game").innerHTML = "<canvas id='canvas'"+" width="+(1400)+" height="+(600)+" >"
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
var Window_Width = 1400
var Window_Height = 600
function MoveCamera() {
    World.Camera.x = World.Camera.x+World.Player.x-World.Camera.x/10
    World.Camera.y = World.Camera.y+World.Player.y-World.Camera.y/10
}
function DrawBlock() {
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,10000,10000)
    ctx.fillStyle = "black"
    for (let x = Math.round((World.Camera.x-128)/64); x < Math.round(World.Camera.x/48)+Math.round(window.innerWidth/64); x++) {
        for (let y = Math.round((World.Camera.y-128)/64); y < Math.round(World.Camera.y/48)+Math.round(window.innerHeight/64); y++) {
            try {
                Canvas.DrawBlock(ctx,blockData[y][x],x*64-World.Camera.x,y*64-World.Camera.y)
                if(blockData[y][x] == "n1" || blockData[y][x] == "n2"){
                console.log(grow[y][x])
                }
                if(grow[y][x] == 1){

                  if(blockData[y][x] == "n1"){

                    blockData[y][x] = "n2";
                    grow[y][x] = 300;
                    break;
                  }
                  if(blockData[y][x] == "n2"){

                    blockData[y][x] = "n3";
                    grow[y][x] = 300;
                  }
                  if(blockData[y][x] == "j1"){

                    blockData[y][x] = "j2";
                    grow[y][x] = 300;
                    break;
                  }
                  if(blockData[y][x] == "j2"){

                    blockData[y][x] = "j3";
                    grow[y][x] = 300;
                  }
                }
                grow[y][x] = grow[y][x]-1;
                console.log(grow[y][x] )
            } catch (error) {
                
            }
            
        }
        
    }
}
function DrawSlot() {
  
}
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  canvas.addEventListener("click", function (evt) {
    console.log(BlockIndex.x)
    Click.Click()
  },false)
  canvas.addEventListener('mousemove', function (evt) {
    var mousePos = getMousePosition(canvas, evt);
    document.getElementById("ctx").innerText = 1400/canvas.scrollWidth
    World.mousePos.x = mousePos.x*1400/canvas.scrollWidth
    World.mousePos.y = mousePos.y*1400/canvas.scrollWidth
  },false)
function main() {
  if(screen == 0){
	MoveCamera()
    DrawBlock()
    Canvas.DrawImage(ctx,"./Image/Player/Player.png",Window_Width/2-32,Window_Height/2-32,58,58)
    BlockIndex.x = Math.round((World.Camera.x+World.mousePos.x-32)/64)
    BlockIndex.y = Math.round((World.Camera.y+World.mousePos.y-32)/64)
    Canvas.DrawImage(ctx,"./Image/Player/Mouse.png",(BlockIndex.x*64)-World.Camera.x,(BlockIndex.y*64)-World.Camera.y,64,64)

  }

  if(screen == 1){
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,2000,1000)
    ctx.fillStyle = "white"
    ctx.fillStyle = "black"
    ctx.fillRect(320,0,50,1000)
    ctx.fillStyle = "black"
    ctx.fillRect(840,0,1000,1000)
    ctx.fillStyle = "white"
    ctx.fillRect(400,0,100,500)
    ctx.fillStyle = "white"
    ctx.fillRect(0,Window_Height-100,10000,300)
    ctx.font = "italic bold 64px sans-serif";
      switch(World.ShopSlot%3){
        case 0:
          Canvas.DrawImage(ctx,"./Image/Item/50.png",0,0,200,200)
          ctx.fillText("にんじん",0,300)
          ctx.fillText("50G",0,400)
          break
          case 1:
            Canvas.DrawImage(ctx,"./Image/Item/100.png",0,0,200,300)
            ctx.fillText("ただのくわ",0,300)
            ctx.fillText("100G",0,400)
            break
            case 2:
              Canvas.DrawImage(ctx,"./Image/Item/ja.png",0,0,200,200)
              ctx.fillText("じゃがいも",0,300)
              ctx.fillText("60G",0,440)
              break

      }
      ctx.fillStyle = "rgb(100,100,0)"
      ctx.fillRect(400,0,100,100)
      for (let i = 0; i < 5; i++) {
        switch((World.ShopSlot+i)%3){
          case 0:
            Canvas.DrawImage(ctx,"./Image/Item/50.png",400,0+i*100,80,80)
            break
            case 1:
              Canvas.DrawImage(ctx,"./Image/Item/100.png",400,0+i*100,80,80)
              break
              case 2:
                Canvas.DrawImage(ctx,"./Image/Item/ja.png",400,0+i*100,80,80)
                break
        }
        switch((Item.ItemList[World.ItemSlot].type)){
          case "b":
            Canvas.DrawImage(ctx,"./Image/Item/50.png",700,0,300,300)
            ctx.fillText("にんじん",700,400)
            ctx.fillText("50G",700,480)
            break
            case "a":
              Canvas.DrawImage(ctx,"./Image/Item/100.png",700,0,300,300)
              ctx.fillText("ただのくわ",700,400)
              ctx.fillText("100G",700,480)
              break
              case "j":
                Canvas.DrawImage(ctx,"./Image/Item/ja.png",700,0,300,300)
                ctx.fillText("ただのくわ",700,400)
                ctx.fillText("100G",700,480)
                break
        }
      }
  }
  if(screen == 1){
    ctx.font = "italic bold 32px sans-serif";
  ctx.fillText("e:売る,r:買う,q:選択",0,520)
  }else{
    ctx.font = "italic bold 32px sans-serif";
  ctx.fillText("t:収穫,click:植える",0,520)
  }
  ctx.fillText("1~9アイテムを選択",0,552)
  Item.Draw(ctx,Window_Width,Window_Height)
  ctx.font = "italic bold 64px sans-serif";
  ctx.fillText("Gold:"+World.Gold,0,600)
	requestAnimationFrame(main);
}
requestAnimationFrame(main);