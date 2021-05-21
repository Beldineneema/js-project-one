let chef = {
    name: "Mpishi",
    age: 40,
};

chef.sayHi = function(){
    console.log(`Hi, my name is ${this.name}I'm going to make you a yummy meal today` );

}
chef.sayHi();

class Kitchen {
    constructor(Item, Quantity, Price){
        this.Item=Item;
        this.Quantity=Quantity;
        this.Price=Price;
        this.Total=Price*Quantity
    };
    getTotalStock(){
        return `${ this.Quantity } kgs of ${this.Item} for dollars ${this.Total};`
    }

}
let Kitchen = newKitchen("Rice",5,100);
console.log(Kitchen.getTotalStock());
let Kitchen1 = new Kitchen("Rice",5,11);
console.log(Kitchen1.getTotalStock());
let Kitchen2=new Kitchen("Flour", 8,100);
console.log(Kitchen2.getTotalStock());

function prepare(Ingredients, callback){
    console.log(`preparing ${Ingredients}`);
    callback();

}

function chop(){
    console.log('chopping');
}
prepare("Tomatoes, onions, garlic", chop);