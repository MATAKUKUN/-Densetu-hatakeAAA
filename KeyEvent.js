
class KeyEvent{
    static Key = ""
    static Keydown(){
        switch (this.Key) {
            case "a":
                World.Player.x-= 2;
                World.PlayerMode = 0;
                break;
                case "d":
                    World.Player.x+=2;
                    World.PlayerMode = 1;
                    break;
                case "w":
                    World.Player.y-= 2;
                    break;
                    case "s":
                        World.Player.y+=2;
                        break;
                        case "m":
                            console.log(screen)
                            if(screen == 0){
                                screen = 1;
                            }else{
                                screen = 0;
                            }
                            break;
                            case "q":
                                console.log(World.ItemSlot)
                                World.ShopSlot++;
                                break;
                                case "e":
                                    if(screen == 1){
                                    switch (Item.ItemList[World.ItemSlot].type) {
                                        case "b":
                                            World.Gold = World.Gold+40;
                                            Item.removeItem("b")
                                            break;
                                            case "j":
                                                World.Gold = World.Gold+48;
                                                Item.removeItem("j")
                                                break;
                                    }
                                }
                                break;
                                case "r":
                                    if(screen == 1){
                                    switch (World.ShopSlot%3) {
                                        case 1:
                                                if(World.Gold>= 99){
                                                for (let i = 0; i < 64; i++) {
                                                    Item.addItem("a")
                                                }
                                                World.Gold = World.Gold-100;
                                            }
                                            break;
                                            case 0:
                                                if(World.Gold>= 49){
                                                    Item.addItem("b")
                                                World.Gold = World.Gold-50;
                                            }

                                            break;
                                            case 2:
                                                if(World.Gold>= 59){
                                                    Item.addItem("j")
                                                World.Gold = World.Gold-60;
                                            }
                                        default:
                                            break;
                                    }
                                }
                                    break;
            case "1":
                World.ItemSlot = 0
                break;
                case "2":
                    World.ItemSlot = 1
                    break;
                    case "3":
                        World.ItemSlot = 2
                        break;
                        case "4":
                            World.ItemSlot = 3
                            break;
                            case "5":
                                World.ItemSlot = 4
                                break;
                                case "6":
                                    World.ItemSlot = 5
                                    break;
                                    case "7":
                                        World.ItemSlot = 6
                                        break;
                                        case "8":
                                            World.ItemSlot = 7
                                            break;
                                            case "9":
                                                World.ItemSlot = 8
                                                break;
                                                case "t":
                                                        if(blockData[BlockIndex.y][BlockIndex.x] == "n3"){
                                                            for (let i = 0; i < 2; i++) {
                                                                Item.addItem("b")
                                                                
                                                            }
                                                            blockData[BlockIndex.y][BlockIndex.x] = "n"
                                                        }
                                                            if(blockData[BlockIndex.y][BlockIndex.x] == "j3"){
                                                                for (let i = 0; i < 2; i++) {
                                                                    Item.addItem("j")
                                                                    
                                                                }
                                                                blockData[BlockIndex.y][BlockIndex.x] = "n"
                                                                
                                                            }
                                                    
                                                    break;
        }
    }
}

document.body.addEventListener('keydown',
    event => {
        KeyEvent.Key = event.key
        KeyEvent.Keydown()
    });