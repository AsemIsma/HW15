//1
const danaStroka = 'ananas';
console.log(danaStroka.length);
//2
console.log(danaStroka[danaStroka.length - 1]);
//3
function checkFW (word1, word2) {
    console.log(word1[0].toUpperCase() === word2[2].toUpperCase());
}

checkFW('mom', 'MOM')
checkFW('dad', 'grand')

//4
function giveLL (word) {
    if (word[word.length - 1].toLowerCase() === 'ь') {
        console.log(word[word.length - 2]);
    } else {
        console.log(word[word.length - 1]);
    }
}

giveLL('ьышь')
giveLL('хлеб')
giveLL('";;%вапапр"')
giveLL('ХЛЕБББ233423423')
giveLL('МЫШЬ')
giveLL('АПНВПАВКВУЫК!№;;%%::?ЬЬЬ')

//5
let arr = [];

for (let i = 0; i < 100; i++) {
   arr.push(Math.round(Math.random() * 100)); 
}

console.log(arr);

//6
function reverseNum (num) {
    for ( let i = (num.toString().length - 1 ); i >= 0; i--) {
        console.log(num.toString()[i]);
    }
}

reverseNum(12345)

//1 hw

function addTire (num) {
    let result = [];

    for (let i = 0; i < num.toString().length; i++) {
    
        let numStr = num.toString();
        
        result.push(numStr[i]);

        if (parseInt(numStr[i])%2 === 0 && parseInt(numStr[i + 1])%2 === 0) {
            result.push( '-');
        } 

    }
    console.log(result.join(''));
}

addTire(9752246)
addTire(2222)
addTire('ab3227rhc84b')

//2 hw

let pickArr = [7, 19, -9, 437, 0, -4547, 90664, -56743];

pickArr.sort((a, b) => {return a - b})

console.log(pickArr);

pickArr = [757754764, 'dgcvge', true, null, -467890, 0, ' ? ', 'whatt', pickArr];

pickArr.sort((a, b) => {return a - b})

console.log(pickArr);

pickArr = ['ANANAS', 'mom', 'Guten Morgen!', 'Danke', 'Station', 'Bon Appetit!!!', 'Es tut mir leid'];

pickArr.sort((a, b) => {return a.length - b.length})

console.log(pickArr);

//3 hw

function checkXTimes (arr) {
    count = [];

    arrTimes = [];
    
    for (el of arr) {
        let times = 0;
        for (let i = arr.indexOf(el); i < arr.length; i++) {
            if (el === arr[i] ) {
                times = times + 1;
            }
        }
        count.push(el + ': ' + times);
        arrTimes.push(times);
    }

    for ( let i = 0; i < count.length; i++) {
        let baseTimes = count[i];
        for (let b = i; b < count.length; b++) {
            let checkTimes = count[b];
            if (parseInt(baseTimes[baseTimes.length - 1]) > parseInt(checkTimes[checkTimes.length - 1]) && parseInt(baseTimes[baseTimes.length - 1]) != parseInt(checkTimes[checkTimes.length - 1])) {
                return console.log(baseTimes);
            }
        }
    }

}

checkXTimes ([7446656, 9, 0, 9, 0, 9, 0, 0])
checkXTimes ([1,2,3,4,5,6,7,8,1,2,3,1,2,1])
checkXTimes ([5,4,4,4,4,4,5,5,5,8,5,5])