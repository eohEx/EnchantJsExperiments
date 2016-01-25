//クマクラス
var Bear = enchant.Class.create(enchant.Sprite, {
    
    initialize: function (x, y) {
        enchant.Sprite.call(this, 32, 32);
        
        //移動スピード
        this.speed = 15;
        
        //位置
        this.x = x;
        this.y = y;
        
        //画像
        this.image = game.assets["../img/chara1.png"];
        this.frame = 1;
        
        
        //フレーム遷移時
        this.addEventListener("enterframe", function () {

        });
        
        //タッチ時
        this.addEventListener("touchstart", function() {

        });   
    },
    GoRight: function () {
        
        //枠判定
        if ( this.x > 288 ) {
            return;
        }
        
        //移動
        this.x += this.speed;
        this.Walk();
    },
    GoLeft: function () {
        
        //枠判定
        if ( this.x < 0 ) {
            return;
        }
        
        //移動
        this.x -= this.speed;
        this.Walk();
        
    },
    GoUp: function () {
        
        //枠判定
        if ( this.y < 0 ) {
            return;
        }
        
        //移動
        this.y -= this.speed;
        this.Walk();
    },
    GoDown: function () {
        
        //枠判定
        if ( this.y > 288 ) {
            return;
        }
        
        //移動
        this.y += this.speed;
        this.Walk();
    },
    Walk: function () {
        this.frame = this.age%2;
    }
});