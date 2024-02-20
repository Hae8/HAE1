const title = document.querySelector('#title');
const author = document.querySelector('#author');
const save = document.querySelector('#save');
const bookList = document.querySelector('#bookList');

save.addEventListener("click", (e) => {
    const item = document.createElement("li");
    item.innerHTML =`
    ${title.value} - ${author.value}
    <span class="delButton"> 삭제 </span>
    `;
    bookList.appendChild(item);
    e.preventDefault();
    title.value="";
    author.value="";
    title.focus();
    
    const delButtons = document.querySelectorAll(".delButton");
    for (let delButton of delButtons){
        delButton.addEventListener('click', function() {
            this.parentNode.remove();
        });
    }
});

