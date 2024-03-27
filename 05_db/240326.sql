use study_db;

SELECT * FROM tcity; 		# tcity 데이터 조회 - * 을 사용하면 모든 컬럼을 가져온다.
DESC tcity; 				# tcity 테이블 구조와 속성 파악

SELECT region AS `지역 명`, name, area FROM tcity;
# tcity 테이블에서 (region, name, area 컬럼만 조회)
# 백틱 혹은 따옴표를 사용하면 한글과 공백을 사용할 수 있다.
# AS 를 사용하면 컬럼의 별명을 지정할 수 있다. - AS 는 생략 가능하다.

SELECT name AS `도시 명`, popu * 10000 AS `인구(명)`
FROM tcity
WHERE metro = 'n';
# 가독성을 높이기 위해 줄바꿈을 사용할 수 있다.
# 셀 내에서 자체적으로 연산도 가능하다.

SELECT name, area, popu, popu/area AS `인구 밀도`
FROM tcity;

SELECT 365 * 24 * 60 * 60 AS `1년 (초)`;

SELECT concat (name, " ", grade)
FROM tstaff;
# concat 함수를 이용하면 속성명끼리 묶어서 나타낼 수 있다.

##################### DISTINCT ###############################################################

SELECT grade from tstaff;
SELECT DISTINCT grade from tstaff;
# DISTINCT 를 이용하면 중복되는 행은 제거하고 가져온다.

##################### ORDER BY ###############################################################

DESC tcity;
SELECT * FROM tcity;
# 기본 키에 대한 오름차순 정렬이 기본이다.

SELECT * FROM tcity ORDER BY popu;
SELECT * FROM tcity ORDER BY popu ASC;
SELECT * FROM tcity ORDER BY popu DESC;
# ORDER BY 컬럼명 [ASC | DESC] 를 이용하면 컬럼명을 기준으로 ASC(오름차순) | DESC(내림차순) 정렬을 한다.

SELECT * FROM tcity ORDER BY region, name DESC;
SELECT * FROM tcity ORDER BY 5, 1 DESC;
SELECT name, region FROM tcity ORDER BY 2, 1 DESC;
# 정렬 조건을 여러개 지정할 수도 있다.
# 조건을 지정할 때 속성명 대신 열 번호를 가져올 수도 있다.

SELECT name, area, popu, popu/area AS `인구 밀도`
FROM tcity
WHERE metro = 'n'
ORDER BY `인구 밀도` DESC; 	# 한글은 백틱으로 작성해야 조건 설정 시 인식이 제대로 된다.

SELECT * 
FROM tstaff
ORDER BY salary, score DESC;

SELECT `name`, `popu`
FROM tcity
WHERE metro = 'n';

SELECT `name`, `depart`, `grade`, `joindate` AS `join`
FROM tstaff
WHERE `joindate` < '2015-01-01';
# FROM -> WHERE -> SELECT -> ORDER BY 의 순으로 명령이 실행되기 때문에 WHERE에서 별명을 쓸 수 없다.

##################### NULL ###############################################################

SELECT * FROM tstaff WHERE score is NULL;
SELECT * FROM tstaff WHERE score is NOT NULL;
DESC tstaff;
# NULL은 값이 입력되어 있지 않은 특수한 상태를 의미한다.

##################### OR | AND ###############################################################

SELECT * FROM logic_operation;

SELECT `a`, `b`, `and`
FROM logic_operation
WHERE a = 1 OR b = 1;

SELECT `a`, `b`, `or`
FROM logic_operation
WHERE a = 1 OR b = 1;

SELECT `a`
FROM logic_operation
WHERE NOT a = 1;

SELECT *
FROM tstaff
WHERE salary < 300 AND score >= 60;

SELECT *
FROM tstaff
WHERE	
	(depart = '인사과' AND gender = '남')
	OR
	(depart = '영업부' AND gender = '여');
# 컬럼 명에는 백틱을 써도 되지만, 값에는 백틱을 쓸 수 없다.

##################### LIKE ###############################################################

SELECT *
FROM tstaff
WHERE `name` LIKE '정__';

SELECT *
FROM tstaff
WHERE `name` LIKE '정%';
# LIKE는 와일드 카드를 사용한 패턴으로 부분 문자열을 검색할 수 있다.
# _ : 한 개의 임의의 문자
# % : 길이에 구애받지 않는 임의 문자열

SELECT *
FROM emp
WHERE `ENAME` LIKE '%T%';

SELECT *
FROM emp
WHERE `ENAME` NOT LIKE '%T%';

SELECT *
FROM emp
WHERE `ENAME` LIKE '%T';

SELECT *
FROM emp
WHERE `ENAME` LIKE 'T%';

SELECT *
FROM promotion_tbl
WHERE `promotion_msg` LIKE '%30\%%';

SELECT *
FROM promotion_tbl
WHERE `promotion_msg` LIKE '%30#%%' ESCAPE '#';
# 에스케이프 문자를 임의로 지정 가능하다.

##################### BETWEEN ###############################################################

SELECT *
FROM tcity
WHERE popu >= 50 and popu <= 100;

SELECT *
FROM tstaff
WHERE name BETWEEN 'ㄱ' AND 'ㅅ';

SELECT *
FROM tstaff
WHERE name BETWEEN '사' AND '하';

SELECT *
FROM tstaff
WHERE joindate BETWEEN '20150101' AND '20151231';
# BETWEEN 에서는 양쪽 끝 값을 모두 포함한다.

##################### IN ###############################################################

SELECT *
FROM tcity
WHERE region IN ('경상', '전라');
# IN은 OR 연산과 동일하다.

SELECT *
FROM tstaff
WHERE grade NOT IN ('이사');

SELECT *
FROM tcity
WHERE area BETWEEN 500 AND 1000;

SELECT *
FROM tcity
WHERE region NOT IN ('경상', '전라');

SELECT *
FROM tstaff
WHERE name LIKE '이%' OR name LIKE '안%';

SELECT *
FROM tstaff
WHERE depart IN ('총무부', '영업부');

SELECT *
FROM tstaff
WHERE
	grade = '대리'
    AND
    depart IN ('인사과', '영업부');

##################### LIMIT ###############################################################
    
SELECT *
FROM tstaff LIMIT 5, 10;
# LIMIT 의 기본값은 0이다.
# 5개를 건너뛰고 6번째부터 10개까지만 보이게 할 수 있다.

SELECT *
FROM tstaff
ORDER BY salary DESC LIMIT 5;

SELECT *
FROM tcity
ORDER BY area DESC
LIMIT 3, 2;

SELECT *
FROM tcity
ORDER BY area DESC
LIMIT 2 OFFSET 3;
# OFFSET 을 사용하여 건너뛰기를 할 수도 있다.

SELECT *
FROM tstaff
ORDER BY salary DESC
LIMIT 11, 5;

##################### 연산 ###############################################################

SELECT *, popu * 10000 / area AS `인구 밀도`
FROM tcity
WHERE popu * 10000 / area < 1000;

SELECT *, popu * 10000 / area < 1000 AS `인구 밀도`
FROM tcity
ORDER BY `인구 밀도` DESC;
# FROM -> WHERE -> SELECT -> ORDER BY 의 순으로 연산이 되기 때문에 별칭을 사용할 때 조심해야 한다.

SELECT
	NULL * 1, NULL - 1, NULL + 1, NULL / 1, 1 / NULL;
SELECT    
    NULL * NULL, NULL - NULL, NULL + NULL, NULL / NULL, NULL / NULL;
# NULL이 들어있는 데이터로 연산하면 NULL 만을 반환한다.

##################### 숫자 함수 ###############################################################

SELECT
	10 % 3 `연산자 연산`,
    MOD(10, 3) `함수 연산`;
# MOD()를 사용하면  x를 y로 나눈 나머지를 반환한다.

SELECT
	*, MOD(FLOOR(score), 2) `홀짝`
FROM tstaff;
# FLOOR()를 사용하면 x보다 작거나 같은 최대 정수를 반환한다.

SELECT
	*, ROUND(score)
FROM tstaff;

SELECT
	*, ROUND(score,1)
FROM tstaff;

SELECT
	*, ROUND(score,-1)
FROM tstaff;
# ROUND 함수를 이용하면 X를 Y로 자리 기준으로 삼아 반올림 시킨다.

SELECT *
FROM emp
WHERE MOD(EMPNO, 2) = 1;

SELECT
`name`, `depart`, `gender`, `joindate`, `grade`, `salary`, ROUND(score) as `score`
FROM tstaff;

##################### 문자 함수 ###############################################################

SELECT name, LENGTH(name) AS `name의 길이`
FROM usertbl;
# 한글은 한 글자가 3자리를 차지한다.

SELECT SUBSTRING(HIREDATE,1,4) AS `입사 연도`, SUBSTRING(HIREDATE,6,2) AS `입사 월`
FROM emp;
# SUBSTRING(str, start, length)함수를 사용하면 문자열에서 일부를 추출한다. (start는 1부터 시작)

##################### 시간 함수 ###############################################################

SELECT CURRENT_DATE(), ADDDATE(CURDATE(), INTERVAL 100 DAY);
# ADDDATE 함수를 통해 날짜를 더할 수 있다.

SELECT CURRENT_DATE(), SUBDATE(CURDATE(), INTERVAL 100 DAY);
# SUBDATE 함수를 통해 날짜를 뺄 수 있다.

SELECT CURRENT_TIME(), ADDTIME(CURTIME(), "10:10:10");
# ADDTIME 함수를 통해 시간을 더할 수 있다.

SELECT CURRENT_TIME(), SUBTIME(CURTIME(), "10:10:10");
# SUBTIME 함수를 통해 시간을 뺄 수 있다.

SELECT NOW(), LOCALTIME(), LOCALTIMESTAMP(), CURRENT_TIMESTAMP();
# 현재 시간을 나타내는 함수다.

SELECT *, DATEDIFF(CURDATE(), joindate) AS `입사 경과일`
FROM tstaff;

SELECT
	*,
	YEAR(CURDATE()) - birthyear -  (RIGHT(CURDATE(), 5) < RIGHT(mdate, 5))
FROM usertbl;
# 만 나이 계산
# 2024-03-26에 태어나면? 0살
# 2023-03-27에 태어나면? 0살
# 2023-03-26에 태어나면? 1살

##################### 조건문 ###############################################################

SELECT
	*,
    IF (salary >= 300, salary * 0.3, salary * 0.5) AS `성과금`
FROM tstaff;

SELECT
	*,
    CASE
		WHEN salary >= 300 THEN salary * 0.3
		ELSE salary * 0.5
	END AS `성과금`
FROM tstaff;
# 동일한 조건문을 IF와 CASE를 사용하여 쓸 수 있다.

SELECT
	*,
	CASE grade
		WHEN '사원' THEN 100
        WHEN '대리' THEN 200
        ELSE 300
	END AS `성과금`
FROM tstaff;