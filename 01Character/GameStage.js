var GameStage = enchant.Class.create(enchant.Scene, {
    
    initialize: function()
    {
        //初期化
        enchant.Scene.call(this);
        
        //キャラ
        bear = new Bear(100, 100); //生成
        bear.speed = 10;           //移動スピード
        this.addChild(bear);       //表示
        
        //フレーム遷移時
        this.addEventListener("enterframe", function () {

            //右ボタン押下時
            if(game.input.right) {
                bear.GoRight();
            }
            
            //左ボタン押下時
            if(game.input.left) {
                bear.GoLeft();
            }
            
            //上ボタン押下時
            if(game.input.up) {
                bear.GoUp();
            }
            
            //下ボタン押下時
            if(game.input.down) {
                bear.GoDown();
            }
        });
    }
});