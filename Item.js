class AItem{
    type = "n"
    Int = 0
}

class Item{
    static ItemList = [new AItem("a"),new AItem(),new AItem(),new AItem(),new AItem(),new AItem(),new AItem(),new AItem(),new AItem(),]
    static Draw(ctx,width,height){
        for (let i = 3; i < 12; i++) {
            if(i-3 == World.ItemSlot){
                ctx.fillStyle = "yellow"
            }else{
                ctx.fillStyle = "black"
            }
            ctx.fillRect(i*width/12,height-width/12,(width/12)-14,(width/14)-10)
            ctx.fillStyle = "white"
            ctx.fillRect(i*width/12+5,height-width/12+5,(width/14)-20,(width/14)-20)
            switch (this.ItemList[i-3].type) {
                case "a":
                    Canvas.DrawImage(ctx,"./Image/Item/100.png",i*width/12+5,height-width/12+5,(width/14)-20,(width/14)-20)
                    break;
                    case "b":
                        Canvas.DrawImage(ctx,"./Image/Item/50.png",i*width/12+5,height-width/12+5,(width/14)-20,(width/14)-20)
                        break;
                        case "j":
                            Canvas.DrawImage(ctx,"./Image/Item/ja.png",i*width/12+5,height-width/12+5,(width/14)-20,(width/14)-20)
                            break;
                default:
                    break;
            }
            ctx.fillStyle = "Black"
            ctx.font = "italic bold "+width/45+"px sans-serif";
            if((this.ItemList[i-3].type == "a")){
                ctx.fillText(1,i*width/12+5,height)
            }else{
            ctx.fillText(this.ItemList[i-3].Int,i*width/12+5,height)
            }
            
        }
    }
    static addItem(Item){
        var cI = [0,0,0,0,0,0,0,0,0]
        var cT = [0,0,0,0,0,0,0,0,0]
        for (let i = 0; i < 9; i++) {
            if(!(this.ItemList[i].Int == 64)){
            cI[i] = this.ItemList[i].Int
            cT[i] = this.ItemList[i].type
            }
        }
        try {
            
        console.log(cT)
            if(cT.indexOf(Item) == -1){
                this.ItemList[cT.indexOf("n")].Int = 1;
                this.ItemList[cT.indexOf("n")].type = Item
            }else{
                this.ItemList[cT.indexOf(Item)].Int++

            }
        } catch (error) {
            console.log("アイテムがいっぱいです")
        }
        console.log(this.ItemList)
    }
    static removeItem(){
        this.ItemList[World.ItemSlot].Int = this.ItemList[World.ItemSlot].Int - 1;
        if(this.ItemList[World.ItemSlot].Int == 0){
        this.ItemList[World.ItemSlot].type = "n"
        this.ItemList[World.ItemSlot].Int = 0
        }
    }
}