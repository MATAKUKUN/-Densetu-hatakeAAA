class Canvas{
    static DrawImage(ctx,src,x,y,width,height) {
        var Img = new Image()
        Img.src = src;
        ctx.drawImage(Img,x,y,width,height)
    }
    static DrawBlock(ctx,type,x,y){
        switch (type) {
            case "g":
                this.DrawImage(ctx,"./Image/Block/草.png",x,y,60,60)
                break;
                case "n":
                    this.DrawImage(ctx,"./Image/Block/え.png",x,y,60,60)
                    break;
                    case "n1":
                        this.DrawImage(ctx,"./Image/Block/う.png",x,y,60,60)
                        break;
                        case "n2":
                            this.DrawImage(ctx,"./Image/Block/い.png",x,y,60,60)
                            break;
                            case "n3":
                                this.DrawImage(ctx,"./Image/Block/あ.png",x,y,60,60)
                                break;
                                case "j1":
                                    this.DrawImage(ctx,"./Image/Block/う.png",x,y,60,60)
                                    break;
                                    case "j2":
                                        this.DrawImage(ctx,"./Image/Block/き.png",x,y,60,60)
                                        break;
                                        case "j3":
                                            this.DrawImage(ctx,"./Image/Block/か.png",x,y,60,60)
                                            break;
            default:
                break;
        }
    }
}