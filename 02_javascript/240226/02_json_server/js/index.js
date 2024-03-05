function getData(){
    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const tbody = document.querySelector('#contacts');
        tbody.innerHTML = '';
        for(let contact of result) {
            let row = document.createElement('tr');

            let id_col = document.createElement('td');
            id_col.innerText = contact.id;

            let name_col = document.createElement('td');
            name_col.innerText = contact.name;

            let tel_col = document.createElement('td');
            tel_col.innerText = contact.tel;

            let addr_col = document.createElement('td');
            addr_col.innerText = contact.address;

////////////////////////////////// 삭제 기능 ///////////////////////////////////////

            let del_col = document.createElement('td');
            let del_btn = document.createElement('button');

            del_btn.innerText = '삭제';
            del_btn.addEventListener('click', () => {
                console.log(contact.id);
                deleteData(contact.id);
            })
            del_col.appendChild(del_btn);


////////////////////////////////// 수정 기능 ///////////////////////////////////////

            let mod_col = document.createElement('td');
            let mod_btn = document.createElement('button');
            mod_btn.innerText = '수정';
            mod_col.appendChild(mod_btn);
            mod_btn.addEventListener('click', () => {
                let newContact = {
                    name: '해파리',
                    tel: '010-9999-9999',
                    address: '태평양'
                }
                modifyData(contact.id, newContact);
            })

///////////////////////////////////////////////////////////////////////////////////

            row.appendChild(id_col);
            row.appendChild(name_col);
            row.appendChild(tel_col);
            row.appendChild(addr_col);
            row.appendChild(del_col);
            tbody.appendChild(row)

            /*let htmlString =`
                <td>${contact.id}</td>
                <td>${contact.name}</td>
                <td>${contact.tel}</td>
                <td>${contact.address}</td>
                <td><button>삭제</button></td>
            `;
            row.innerHTML = htmlString;
            tbody.appendChild(row)*/
        }
    });
}

function deleteData(id){
    fetch('http://localhost:3000/contacts/' + id, {method: 'DELETE'}) // 서버의 데이터를 삭제한다.
                .then(response => {
                    console.log(response);
                    if (response.ok) { // 데이터를 제대로 받아오면 함수를 실행
                        getData();
                    }else{
                        throw new Error('삭제 에러') // response가 ok가 아니면 Error가 발생한다.
                    }
                }).catch(e => console.error(e))
}

function modifyData(id, newObj) {
    fetch('http://localhost:3000/contacts/' + id, { // 서버의 데이터를 수정한다.
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
    }).then(response => {
        console.log(response);
        if (response.ok) { // 데이터를 제대로 받아오면 함수를 실행
            getData();
        } else {
            throw new Error('수정 에러') // response가 ok가 아니면 Error가 발생한다.
        }
    }).catch(e => console.error(e))
}

function createData(obj) {
    fetch("http://localhost:3000/contacts", { // 서버 db.json에 추가하라고 요청이 보내진다.
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj) // 서버에서 받아온 데이터를 json 형식으로 처리한다.
    }).then(response => {
        console.log(response);
        if (response.ok) { // 데이터를 제대로 받아오면 함수를 실행
            getData();
        } else {
            throw new Error('등록 에러') // response가 ok가 아니면 Error가 발생한다.
        }
    }).catch(e => console.error(e))
}

getData();

    document.querySelector('#addbtn').addEventListener('click', () => {
        const id = document.querySelector('#id').value;
        const name = document.querySelector('#name').value;
        const tel = document.querySelector('#tel').value;
        const address = document.querySelector('#addr').value;

        const newContact = {id, name, tel, address};
        createData(newContact);
    })