let name = '최인규';
let age = 20;
let height = 200;
let weight = 100;

function docLog1(...data) {
    for (let item of data) {
        document.write(item);
        document.write('<br/>');
    }
}

// docLog1(name);
// docLog1(name, age);
// docLog1(name, age, height, weight);

function docLog2(name, age, ...data) {
    document.write(`이름: ${name}`);
    document.write('<br/>');+
    document.write(`나이: ${age}`);
    for (let item of data) {
        document.write(`<p>${item}</p>`);
        document.write('<br/>');
    }
}

docLog2(name, age, height, weight);