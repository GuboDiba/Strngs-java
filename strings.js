let a="beautiful";
console.log(a.length);
console.log(a[-4])

const food ="i was feeling hungry today";
const newstring="eat";
console.log(food[4]);
const result = 'I was ${newstring} feeling hungry today';
console.log(result);

const story="the quick brown fox jumps over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);
const string5 ="we are now going to school";
console.log(string5.includes("now"));
console.log(string5.includes("sitting"));

let s
="wonderful"
console.log(v.toUpperCase());

let v="amazing";
let t="BEneath";
console.log(v.toLocaleLowerCase());
console.log(t.toLocaleLowerCase());

let d="A beautiful wedding";
    d=d.split("").map(([first,...rest])=>firstchar.toUpperCase()+rest.join("").toLowerCase()).join("");
    console.log(d);