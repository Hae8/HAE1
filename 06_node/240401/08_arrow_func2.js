let relationShip1 = {
    name: '짱구',
    friends: ['철수', '영희', '맹구', '훈이'],
    printFriends: function() {
        let that = this;
        console.log(this);
        this.friends.forEach(function(friend) {
            console.log(`${that.name}의 친구, ${friend}`);
        })
    }
}

relationShip1.printFriends(); 
// {
//     name: '짱구',
//     friends: [ '철수', '영희', '맹구', '훈이' ],
//     printFriends: [Function: printFriends]
//   }
// 짱구의 친구, 철수
// 짱구의 친구, 영희
// 짱구의 친구, 맹구
// 짱구의 친구, 훈이

let relationShip2 = {
    name: '짱구',
    friends: ['철수', '영희', '맹구', '훈이'],
    printFriends: () => {
        console.log(this);
    }
}

relationShip2.printFriends(); // {} -> 화살표 함수가 기존의 function문을 대체하는 것은 아니다. (this가 달라진다.) - 객체 안쪽에서 화살표 함수를 쓰는 것은 지양하는 것이 좋다.