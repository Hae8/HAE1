let number = Number(prompt('숫자를 입력하세요'));

switch (number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        document.write('작다');
        break;
    default:
        document.write('크다');
        break;
}