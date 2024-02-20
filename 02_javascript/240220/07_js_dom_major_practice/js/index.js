// 1. 등록 버튼을 눌렀을 때, 이름과 전공을 콘솔에 출력

const addBtn = document.querySelector('button')

let add = () => {
        let name = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;
    
        // console.log(`${name}, ${major}`);
    
        if (name && major) {
            // 2. <tr> <td> ${name} </td> <td> ${major} </td> </tr>
        let tr = document.createElement('tr'); // <tr> </tr> 을 만듦
    
        let tdname = document.createElement('td'); // <td> </td> 을 만듦
        let nameText = document.createTextNode(name); //텍스트 노드 : name 을 만듦
        tdname.appendChild(nameText); // <td> </td> 아래에 텍스트 노드를 넣음
    
        let tdmajor = document.createElement('td'); // <td> </td> 을 만듦
        tdmajor.innerText = major; // <td> </td> 아래에 major 를 넣음
    
        tr.appendChild(tdname); // <tr> </tr> 아래에 <td> ${name} </td>을 넣음
        tr.appendChild(tdmajor);// <tr> </tr> 아래에 <td> ${major} </td>을 넣음
    
        // console.log(tr, tdname, tdmajor);
    
        document.querySelector('#attendant > tbody').appendChild(tr);
        document.querySelector('#username').value = '';
        document.querySelector('#major').value = '';
        document.querySelector('#username').focus();
    } else{
        alert(`전공과 이름을 모두 입력하세요.`)
    }
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    add();
});

document.querySelector('#major').addEventListener('keyup', (e) => {
    if (e.code == "Enter") {
        add();
    }
});