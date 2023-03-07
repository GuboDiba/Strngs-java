let a="beautiful";
console.log(a[5].a[6],[7],a[8]);

String.prototype.insert=function(index,string){
    if(index>0){
        return Food.substring(0,index) + string + food.substring(index,food.length);

    }
    return string + food
}

var food ="i was feeling hungry today";
food=food.insert(5,"eat");
console.log([food]);

const story="the quick brown fox jumps over the lazy dog";
let count =(story.match(/fox/gg))||[]).length;