USE study_db;

##################### CASE ###############################################################

SELECT 
	*,
    IF (score IS NULL, 0 , score) AS `NEW_SCORE`
FROM tstaff;

SELECT 
	*,
    CASE
		WHEN score IS NULL THEN 0
        ELSE score
    END AS `NEW_SCORE`
FROM tstaff;

SELECT
	*,
    CASE
		WHEN gender = '남' THEN 1
        WHEN gender = '여' THEN 2
        ELSE '알 수 없음'
	END AS `NEW_GENDER`
FROM tstaff;

SELECT
	*,
    CASE gender
		WHEN '남' THEN 1
        WHEN '여' THEN 2
        ELSE '알 수 없음'
	END AS `NEW_GENDER`
FROM tstaff;
# 공통된 변수는 CASE 뒤에 넣어서 쓸 수 있다. - 단순 CASE
# 단순 CASE 문을 이용할 때는 NULL값과 비교할 수 없다. - NULL은 등호가 아닌 IS NULL을 이용하기 때문이다.

SELECT *
FROM tstaff
WHERE
	CASE grade
		WHEN '사원' THEN 1
        WHEN '대리' THEN 2
        WHEN '차장' THEN 3
        WHEN '과장' THEN 4
        WHEN '부장' THEN 5
        WHEN '이사' THEN 6
		ELSE NULL
	END = 6
;
# CASE 문은 WHERE 절에서도 사용할 수 있다.

SELECT * 
FROM tstaff
ORDER BY
	CASE grade
		WHEN '사원' THEN 1
        WHEN '대리' THEN 2
        WHEN '차장' THEN 3
        WHEN '과장' THEN 4
        WHEN '부장' THEN 5
        WHEN '이사' THEN 6
		ELSE NULL
	END DESC;
# CASE 문은 ORDER BY 절에서도 사용할 수 있다.

##################### GROUP BY ###############################################################

SELECT grade
FROM tstaff
GROUP BY grade;

SELECT grade, AVG(salary) AS `직급별 평균 임금`
FROM tstaff
WHERE grade NOT IN ('이사')
GROUP BY grade
ORDER BY salary AS `직급별 평균 임금`;
# 실행 순서: 테이블 - 조건 -열 -그룹 - 정렬
# 실행 순서: FROM - SELECT - WHERE - GROUP BY - ORDER BY

SELECT depart, gender, COUNT(*) AS `각각의 인원 수`
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;

##################### SUM() ###############################################################

SELECT depart, gender, SUM(score)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;

SELECT depart, gender, SUM(grade)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;
# 문자 자료형에는 사용할 수 없다.

SELECT depart, gender, SUM(joindate)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;
# 날짜 자료형에는 사용할 수 없다.

##################### AVG() ###############################################################

SELECT depart, gender, AVG(salary)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;

SELECT depart, gender, AVG(grade)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;
# 문자 자료형에는 사용할 수 없다.

SELECT depart, gender, AVG(joindate)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;
# 날짜 자료형에는 사용할 수 없다.

##################### COUNT() ###############################################################

SELECT depart, gender, COUNT(*) AS `각각의 인원 수`
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;
# 일반적으로 *을 넣어 사용한다.

SELECT * FROM tstaff WHERE depart = '영업부' ORDER BY score;

##################### MIN() | MAX() ###############################################################

SELECT depart, gender, MIN(salary)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;

SELECT depart, gender, MAX(salary)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;

##################### 데이터 집계 ###############################################################

SELECT COUNT(*) AS `총 직원 수`
FROM tstaff;

SELECT COUNT(*) AS `고연봉 직원 수`
FROM tstaff
WHERE
    CASE
		WHEN salary >= 400 THEN '고연봉 직원'
		ELSE NULL
	END = '고연봉 직원'
;

SELECT grade, COUNT(*) AS `직급별 직원 수`
FROM tstaff
GROUP BY grade;

SELECT COUNT(DISTINCT grade) AS `직급 종류 갯수`
FROM tstaff;

SELECT COUNT(*) AS `점수가 없는 직원 수`
FROM tstaff
WHERE
	CASE
		WHEN score IS NULL THEN '점수가 없는 직원'
		ELSE NULL
	END = '점수가 없는 직원'
;

SELECT COUNT(*) AS `점수가 없는 직원 수`
FROM tstaff
WHERE score IS NULL;
# 같은 내용을 이렇게도 표현할 수 있다.

SELECT COUNT(*) - COUNT(score) AS `점수가 없는 직원 수`
FROM tstaff;
# 같은 내용을 이렇게도 표현할 수 있다.
    
SELECT depart, ROUND(AVG(salary)) AS `인사과의 평균 급여`
FROM tstaff
WHERE depart = '인사과';
# 계산 시간을 줄이기 위해 WHERE문을 활용해주는 것이 좋다.

SELECT
	SUM(popu) AS `인구의 총합` ,
    AVG(popu) AS `인구의 평균`,
    MIN(area) AS `면적의 최소값`,
    MAX(area) AS `면적의 최대값`
FROM tcity
WHERE region = '전라';

##################### 데이터 집계 ###############################################################
    
SELECT
	COUNT(*) AS `인원수`,
	MAX(SAL) AS `최대 급여`,
    MIN(SAL) AS `최소 급여`,
    SUM(SAL) AS `급여의 합`
FROM EMP;

SELECT
	job,
	MAX(SAL) AS `업무별 최대 급여`,
    MIN(SAL) AS `업무별 최소 급여`,
    SUM(SAL) AS `업무별 급여의 합`
FROM EMP
GROUP BY job;

SELECT
	job,
    COUNT(*) AS `업무별 인원수`
FROM EMP
GROUP BY job;

SELECT (MAX(SAL) - MIN(SAL)) AS `최고 급여와 최소 급여의 차`
FROM EMP;

##################### 2개 이상의 SELECT ###############################################################

##################### 1. 집합 연산자 ###############################################################

SELECT * FROM dept;
SELECT * FROM emp;

SELECT deptno FROM dept; # 4개
SELECT deptno FROM emp ORDER BY deptno DESC; # 14개

SELECT deptno FROM dept
UNION
SELECT deptno FROM emp; # 4개
# UNION: 합집합

SELECT deptno FROM dept
UNION ALL
SELECT deptno FROM emp; # 18개
# UNION ALL은 합집합과 중복된 요소를 포함시켜 가져온다.

SELECT deptno FROM dept
INTERSECT
SELECT deptno FROM emp;
# INTERSECT: 교집합

SELECT deptno FROM dept
EXCEPT
SELECT deptno FROM emp;
# EXCEPT: 차집합 - 순서에 유의해서 적어야 한다!

##################### 2. 서브 쿼리 ###############################################################

SELECT dname
FROM dept
WHERE deptno = (
	SELECT deptno
	FROM emp
	WHERE ename = 'SMITH'
);
# 단일 행 서브쿼리

SELECT dname
FROM dept
WHERE deptno IN (
	SELECT deptno
	FROM emp
	WHERE ename = 'SMITH' or ename = 'MILLER'
);
# 다중 행 서브쿼리

##################### 단일 행 서브 쿼리 ###############################################################

SELECT name
FROM tcity
WHERE popu = (
	SELECT MAX(popu) FROM tcity
);

##################### 단일 행 서브 쿼리 실습 ###############################################################

-- EMP 테이블을 이용해 평균 급여보다 더 많은 급여를 받는 사원을 검색
SELECT *
FROM emp
WHERE sal > (
	SELECT AVG(sal)
    FROM emp
);

-- EMP 테이블에서 MILLER와 같은 부서(deptno)에서 근무하는 사원을 검색
SELECT *
FROM emp
WHERE deptno = (
	SELECT deptno
	FROM emp
	WHERE ename = 'MILLER'
);

-- EMP 테이블에서 MILLER와 동일한 job을 가진 사원을 검색
SELECT *
FROM emp
WHERE job = (
	SELECT job
	FROM emp
	WHERE ename = 'MILLER'
);

-- EMP 테이블에서 MILLER와 급여(SAL)와 동일하거나 더 많이 받는 사원을 검색
SELECT *
FROM emp
WHERE sal >= (
	SELECT sal
	FROM emp
	WHERE ename = 'MILLER'
)
ORDER BY sal DESC;

-- EMP 테이블에서 deptno을 이용해  LOC가 DALLAS인 사원 검색 (DEPT 테이블 활용)
SELECT *
FROM emp
WHERE deptno = (
	SELECT deptno
	FROM DEPT
	WHERE loc = 'DALLAS'
);
# emp와 dept는 deptno를 기준으로 관계를 맺고 있다.

-- EMP 테이블에서 직속상관(MGR)의 이름이 KING인 사원 검색
SELECT *
FROM emp
WHERE mgr = (
	SELECT empno
    FROM emp
    WHERE ename = 'KING'
);  

##################### 다중 열 서브 쿼리 ###############################################################

SELECT  *
FROM tstaff
WHERE (depart, gender) = ('인사과', '남');

SELECT depart, gender FROM tstaff WHERE name = '안중근';

SELECT  *
FROM tstaff
WHERE (depart, gender) = (
	SELECT depart, gender FROM tstaff WHERE name = '안중근'
);

##################### 다중 행 서브 쿼리 ###############################################################

SELECT empno, ename, sal, deptno
FROM emp
WHERE sal IN (
	SELECT MAX(sal) FROM emp GROUP BY deptno
);
# 서브쿼리가 하나 이상의 행을 반환할 경우, 등호가 아닌 연산자를 사용한다.
# IN 연산자 - 반환되는 여러 개의 행 중에서 하나만 참이 되어도 참

SELECT ename, sal FROM emp WHERE deptno = 30;

SELECT ename, sal
FROM emp
WHERE sal > (
	SELECT MAX(sal) FROM emp WHERE deptno = 30
);

SELECT ename, sal
FROM emp
WHERE sal > ALL (
	SELECT sal FROM emp WHERE deptno = 30
);
# 서브쿼리가 하나 이상의 행을 반환할 경우, 등호가 아닌 연산자를 사용한다.
# ALL 연산자 - 서브쿼리의 검색 결과와 모든 값이 일치하면 참

SELECT ename, sal
FROM emp
WHERE sal > (
	SELECT MIN(sal) FROM emp WHERE deptno = 30
);

SELECT ename, sal
FROM emp
WHERE sal > ANY (
	SELECT sal FROM emp WHERE deptno = 30
);

SELECT ename, sal
FROM emp
WHERE sal > SOME (
	SELECT sal FROM emp WHERE deptno = 30
);
# 서브쿼리가 하나 이상의 행을 반환할 경우, 등호가 아닌 연산자를 사용한다.
# ANY 연산자, SOME 연산자 - 서브쿼리의 검색 결과에서 하나만 일치하면 참

SELECT ename, sal
FROM emp
WHERE TRUE;

SELECT ename, sal
FROM emp
WHERE EXISTS (
	SELECT 1 FROM emp WHERE sal > 2000
);
# EXISTS 연산자 - 서브쿼리로 어떤 데이터 존재 여부를 확인 (참 또는 거짓 반환)

##################### 다중 행 서브 쿼리 실습 ###############################################################

-- EMP 테이블에서 부서별로 가장 급여를 많이 받는 사원들과 동일한 급여를 받는 사원 검색
SELECT *
FROM emp
WHERE sal IN (
	SELECT MAX(sal) FROM emp GROUP BY deptno
)
ORDER BY deptno;

-- EMP 테이블에서 SAL를 3,000 이상 받는 사원이 소속된 부서와 동일한 부서에서 근무하는 사원 검색
SELECT *
FROM emp
WHERE deptno IN (
	SELECT DISTINCT deptno FROM emp WHERE sal >= 3000
)
ORDER BY deptno, sal DESC;

-- EMP 테이블에서 JOB이 MANAGER인 사람이 속한 부서정보 검색
SELECT *
FROM dept
WHERE deptno IN (
	SELECT deptno FROM emp WHERE job = 'MANAGER'
);

-- EMP 테이블에서 BLAKE와 동일한 부서에 있는 모든 사원 검색
SELECT *
FROM emp
WHERE deptno = (
	SELECT deptno FROM emp where ename = 'BLAKE'
)
ORDER BY ename;

-- EMP 테이블에서 평균 급여(SAL) 이상을 받는 모든 사원 검색. 급여가 많은 순으로 출력
SELECT *
FROM emp
WHERE sal >= (
	SELECT AVG(sal) FROM emp
)
ORDER BY sal DESC;

-- EMP 테이블에서 이름에 “T”가 있는 사원이 근무하는 부서에 있는 모든 사원 검색. 사원번호 순으로 출력
SELECT *
FROM emp
WHERE deptno IN (
	SELECT DISTINCT deptno FROM emp WHERE ename LIKE '%T%'
)
ORDER BY empno;

-- EMP 테이블에서 근무 지역이 DALLAS인 사원 정보 검색
SELECT *
FROM emp
WHERE deptno IN (
	SELECT deptno FROM dept WHERE loc = 'DALLAS'
);
# IN을 사용하면 확장성을 고려한 코드를 짤 수 있다.