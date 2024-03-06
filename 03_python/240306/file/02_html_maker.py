fileName = input('파일 명을 입력하세요: ')

f = open(f'{fileName}.html', 'w', encoding='utf-8')
f.write('''<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>''')
f.close()