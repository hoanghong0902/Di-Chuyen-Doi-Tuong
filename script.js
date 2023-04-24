/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.status=true;
  this.statusOne=true
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRightLeft = function(){
    if(this.status==true){
      this.left += 100;
      console.log('left: ' + this.left);
    }else{
      this.left -= 100;
      console.log('ok: ' + this.top);
    }
  }
  this.moveDownUp = function(){
    if(this.statusOne==true){

      this.top += 100;
      console.log('top: ' + this.top);
    }else{
      this.top -= 100;
      console.log('ok: ' + this.top);
    }

  }

}

var hero = new Hero('pikachu.png', 20, 30, 200);
var width = 1200;
var height = 700;
function start(){
  if(hero.left<1200 && hero.top==20){
    hero.status=true;
    hero.moveRightLeft();
  }else if(hero.top<=500 && hero.left>=1200){
    hero.status=true;
    hero.moveDownUp()
  }else if(hero.top>500 && hero.left>0){
    hero.status=false;
    hero.moveRightLeft()
  }else{
    hero.statusOne=false;
    hero.moveDownUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}
let a = setInterval(start, 1000)
