class Mango {
    constructor(x,y){
        var option = {
            
            'restitution':0.8,
            'friction':0.5
            
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.Visibility = 255;
        
    

        World.add(world,this.body);

    }
 displaymango(){
     //console.log(this.body.speed);
     
     if(this.body.speed <3){
     var position = this.body.position;
     rectMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     rect(position.x,position.y);

     }
     else 
     {

        var position = this.body.position;

        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility;
        tint(255,this.Visibility);
        
        pop();
     }
 }
}