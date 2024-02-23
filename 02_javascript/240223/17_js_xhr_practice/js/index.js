let xhr = new XMLHttpRequest();
xhr.open('GET', "./data/students.json");
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200){
    const students = JSON.parse(xhr.responseText);
    console.log(students);
    const result = document.querySelector("#result");
    for (let student of students){
        let studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML =`
            <p>${mask(student.name)}</p>
            <p>성별 : ${student.gender}</p>
            <p>주소 : ${student.address}</p>
            `;
        result.appendChild(studentDiv);
        }
    }
}