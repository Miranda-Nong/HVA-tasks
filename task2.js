class rectangle{
     constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
     }

     findArea(){
        return this.length*this.breadth;
     }


     findPerimeter(){
        return 2*(this.length+this.breadth);
     }
}
const rect1=new rectangle(2,5);
const rect2=new rectangle(5,5);


 const area=rect1.findArea();
 const perimeter=rect2.findPerimeter();

console.log(area);
console.log(perimeter);
