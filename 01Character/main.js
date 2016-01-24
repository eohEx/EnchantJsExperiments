enchant();

/*
 *ウィンドウが開いた時の処理
 *ゲームオブジェクトの生成
 *ゲーム全般の設定を行う
 */
window.onload = function () {

    
    //ゲームオブジェクト生成
    game = new Game(320, 320);
    
    //fps設定
    game.fps = 15;
    
    //アセットのプリロード
    game.preload("../img/chara1.png");
    
    /*
     *ゲーム開始時の処理
     *ルートシーンへのスプライトの配置
     */
    game.onload = function(){
        
        //シーンを移動
        gameStage = new GameStage();
        game.pushScene(gameStage);
    }
    
    //ゲーム開始
    game.start();
    
    
}