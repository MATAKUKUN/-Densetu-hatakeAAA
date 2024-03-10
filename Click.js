class Click{
    static Click(){
        if(screen == 0){
        if(Item.ItemList[World.ItemSlot].type == "a"){
            if(blockData[BlockIndex.y][BlockIndex.x] == "g"){
            for (let i = 0; i < 8; i++) {
                Item.removeItem("a")
                
            }
            blockData[BlockIndex.y][BlockIndex.x] = "n"
            }
        }
        if(Item.ItemList[World.ItemSlot].type == "b"){
            if(blockData[BlockIndex.y][BlockIndex.x] == "n"){
            Item.removeItem("b")
            blockData[BlockIndex.y][BlockIndex.x] = "n1"
            grow[BlockIndex.y][BlockIndex.x] = 300;
            }
        }
        if(Item.ItemList[World.ItemSlot].type == "j"){
            if(blockData[BlockIndex.y][BlockIndex.x] == "n"){
            Item.removeItem("b")
            blockData[BlockIndex.y][BlockIndex.x] = "j1"
            grow[BlockIndex.y][BlockIndex.x] = 300;
            }
        }
    }

}
}