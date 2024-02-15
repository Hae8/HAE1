let subject = prompt('과목을 입력하세요. [1: 수학, 2:영어, 3:국어]')

switch (subject) {
    case '1':
        document.write('수학을 선택하셨네요.');
        break;

    case '2':
        document.write('영어를 선택하셨네요.');
        break;

    case '3':
        document.write('국어를 선택하셨네요.');
        break;
    default:
        document.write('잘못 선택하셨습니다. 새로고침 후 다시 실행하세요.');
        break;
}
