var GameStage = enchant.Class.create(enchant.Scene, {
    
    initialize: function()
    {
        //初期化
        enchant.Scene.call(this);
        
        //キャラ
        bear = new Bear(100, 100); //生成
        bear.speed = 10;           //移動スピード
        this.addChild(bear);       //表示
        
        //フレーム遷移
        this.addEventListener(Event.ENTER_FRAME, function () {

            //右ボタン押下
            if(game.input.right) {
                bear.GoRight();
            }
            
            //左ボタン押下
            if(game.input.left) {
                bear.GoLeft();
            }
            
            //上ボタン押下
            if(game.input.up) {
                bear.GoUp();
            }
            
            //下ボタン押下
            if(game.input.down) {
                bear.GoDown();
            }
            
            //Aボタン押下
            if(game.input.a) {
                bear.GoDown();
            }
            
        });
        
        this.addEventListener(Event.A_BUTTON_DOWN, function () {
//            bear.GoRight();
        });
    }
});