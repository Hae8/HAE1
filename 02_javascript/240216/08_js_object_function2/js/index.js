let pass = function (teamPlayer) {
    console.log(this);
    console.log(`${this.name} : ${teamPlayer}, 받아!`);
}

let son = {
    name: '손흥민',
    pass,
}

let park = {
    name: '박지성',
    pass
}

park.pass('손흥민');
son.pass('케인');
