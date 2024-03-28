USE study_db;

SELECT * FROM tcity;
SELECT AVG(popu) FROM tcity WHERE metro = 'y';
SELECT AVG(popu) FROM tcity WHERE metro = 'y';
SELECT metro, AVG(popu) FROM tcity GROUP BY metro;
SELECT metro, COUNT(*) FROM tcity GROUP BY metro;
# GROUP BY 를 사용하면 더 간편하게 계산을 할 수 있다.

##################### 2개 이상의 SELECT ###############################################################

##################### 1. 집합 연산자 (SET operator) ###############################################################

SELECT deptno FROM emp
UNION
SELECT deptno FROM dept;

SELECT deptno FROM emp
INTERSECT
SELECT deptno FROM dept;
# 자료형, 개수, 타입 등이 일치해야 집합연산자를 사용할 수 있다.

##################### 2. 서브 쿼리 (Sub Query) ###############################################################

SELECT *
FROM dept
WHERE deptno = (
	SELECT deptno FROM emp WHERE ename = 'MILLER'
);
# 단일 행 서브쿼리

SELECT *
FROM tstaff
WHERE (depart, gender) = (
	SELECT depart, gender FROM tstaff WHERE name = '안중근'
);
# 다중 열 서브쿼리

SELECT empno, ename, sal, deptno
FROM emp
WHERE sal IN (
	SELECT MAX(sal) FROM emp GROUP BY deptno
);
# 다중 행 서브쿼리

##################### 3. 조인 (JOIN) ###############################################################

##################### 크로스 조인 ###############################################################

SELECT * FROM tcar; # 6개 반환
SELECT * FROM tmaker; # 4개 반환
SELECT * FROM tcar, tmaker; # 24개 반환 - 하나의 데이터에 각각 데이터가 조인한다.
SELECT * FROM tcar CROSS JOIN tmaker WHERE tcar.maker = tmaker.maker; # 5개 반환 - maker를 기준으로 데이터가 조인한다.
# 크로스 조인 - 2개 테이블의 모든 집합의 조인

SELECT * FROM tcar c, tmaker m WHERE c.maker = m.maker;
SELECT * FROM tcar c CROSS JOIN tmaker m WHERE c.maker = m.maker;
# 별명을 붙여 활용할 수도 있다.

##################### 이너 조인 ###############################################################

SELECT *
FROM tcar c
JOIN tmaker m ON c.maker = m.maker; # 5개 반환
# 이너 조인 - 연결할 때 ON을 사용해서 조인의 기준을 만든다.

SELECT *
FROM tcar
JOIN tmaker USING (maker);
# USING - 조인할 컬럼 이름이 같을 경우 사용할 수 있다.

SELECT *
FROM tcar
NATURAL JOIN tmaker;
# NATURAL JOIN - 조인할 컬럼을 자동으로 지정한다.

SELECT c.car, m.factory
FROM tcar c
JOIN tmaker m ON c.maker = m.maker;

##################### 셀프 조인 ###############################################################

SELECT CONCAT(e.ename, ' 의 매니저는 ', m.ename)
FROM emp e
JOIN emp m ON e.mgr = m.empno;
# SELF JOIN - 테이블이 자기자신의 테이블과 조인한다.

##################### 조인 실습 ###############################################################

-- DEPT 테이블의 LOC가 ‘NEW YORK’ 인 사원의 EMP 테이블의 이름과 급여를 조회
SELECT e.ename, e.sal
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE d.loc = 'NEW YORK';

-- DEPT 테이블의 DNAME 컬럼의 값이 ‘ACCOUNTING’ 인 사원의 EMP 테이블의 이름과 입사일을 조회
SELECT e.ename, e.hiredate
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE d.dname = 'ACCOUNTING';

SELECT e.ename, e.hiredate
FROM emp e
JOIN dept d USING (deptno)
WHERE d.dname = 'ACCOUNTING';

-- EMP 테이블의 JOB이 ‘MANAGER’인 사원의 EMP 테이블의 이름, DEPT 테이블의 부서명을 조회
SELECT e.ename, d.dname
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE e.job = 'MANAGER';

SELECT ename, dname
FROM emp
NATURAL JOIN dept
WHERE job = 'MANAGER';

-- EMP 테이블와 SALGRADE 테이블을 이용해 각 급여에 해당하는 등급을 매핑하여, 이름, 급여, 등급을 조회
SELECT ename, sal, grade
FROM emp e
JOIN salgrade s ON e.sal >= s.losal AND e.sal <= s.hisal
ORDER BY sal;

SELECT ename, sal, grade
FROM emp e
JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal
ORDER BY sal;

-- EMP 테이블에서 MANAGER 가 ‘KING’인 사원들의 이름, 직급을 조회
SELECT e.ename, e.job
FROM emp e
JOIN emp m ON e.mgr = m.empno
WHERE m.ename = 'KING';

##################### 아우터 조인 ###############################################################

SELECT * FROM tcar c; # 6개 반환
SELECT * FROM tmaker m; # 4개 반환

SELECT *
FROM tcar c
JOIN tmaker m ON c.maker = m.maker; # 5개 반환 - 교집합만 나타내기 떄문에 SM5(삼성)와 기아가 나타나지 않는다.

SELECT *
FROM tcar c
LEFT JOIN tmaker m ON c.maker = m.maker; # 6개 반환 - SM5(삼성)가 나타나지만 짝이 없기 때문에 NULL로 처리된다.

SELECT *
FROM tcar c
LEFT JOIN tmaker m USING (maker); # 6개 반환 - SM5(삼성)가 나타나지만 짝이 없기 때문에 NULL로 처리된다.

SELECT *
FROM tcar c
NATURAL LEFT JOIN tmaker; # 6개 반환 - SM5(삼성)가 나타나지만 짝이 없기 때문에 NULL로 처리된다.

SELECT *
FROM tcar c
RIGHT JOIN tmaker m ON c.maker = m.maker; # 6개 반환 - 기아가 나타나지만 짝이 없기 때문에 NULL로 처리된다.

SELECT *
FROM tmaker m
LEFT JOIN tcar c ON c.maker = m.maker; # 테이블 순서만 바꾸면 LEFT를 사용해도 똑같은 값이 나온다.
# 아우터 조인 - 조인 조건에서 한 쪽 값이 없더라도 행을 반환한다.

SELECT *
FROM tcar c
LEFT JOIN tmaker m ON c.maker = m.maker
	UNION
SELECT *
FROM tcar c
RIGHT JOIN tmaker m ON c.maker = m.maker; # FULL OUTER JOIN 은 지원하지 않기 때문에 UNION을 사용해야 한다.

##################### 다중 조인 ###############################################################

SELECT * FROM tcar c
	JOIN tmaker m ON c.maker = m.maker
	JOIN tcity ct ON m.factory = ct.name; # 4개 반환 - 이너 조인으로 연결 중
    
SELECT c.car, ct.metro FROM tcar c
	JOIN tmaker m ON c.maker = m.maker
	JOIN tcity ct ON m.factory = ct.name; # 여러 테이블에서 원하는 값만 가져올 수 있다.

##################### 조인 실습 ###############################################################

-- 사원(EMP) 테이블과 부서(DEPT) 테이블을 조인하여, 사원명, 부서번호, 부서명을 출력, 사원 테이블에는 부서번호 40번 데이터가 없지만, 40번 부서의 부서명도 함께 출력
SELECT e.ename, d.deptno, d.dname
FROM emp e
RIGHT JOIN dept d ON e.deptno = d.deptno;

-- NEW YORK에서 근무하고 있는 사원에 대하여 사원명, 업무, 급여, 부서명을 출력
SELECT e.ename, e.job, e.sal, d.dname
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE loc = 'NEW YORK';

-- 보너스(comm)가 null 이 아닌 사원에 대하여 사원명, 부서명, 위치를 출력
SELECT e.ename, d.dname, d.loc
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE e.comm IS NOT NULL;

-- 사원명 중 L자가 있는 사원에 대하여 사원명, 업무, 부서명, 위치를 출력
SELECT e.ename, e.job, d.dname, d.loc
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE e.ename LIKE '%L%';

-- 자신의 관리자보다 먼저 입사한 사원에 대하여 이름, 입사일, 관리자 이름, 관리자 입사일을 출력
SELECT e.ename, e.hiredate, m.ename, m.hiredate
FROM emp e
JOIN emp m ON e.mgr = m.empno
WHERE e.hiredate < m.hiredate;

##################### 데이터 추가 - INSERT ###############################################################

SELECT * FROM tcity;
INSERT INTO tcity VALUES ('강릉', 1040, 21, 'N', '강원');
# INSERT문을 실행하면 처리상태만 표시되기 때문에 SELECT문을 이용해야 입력된 데이터를 직접 확인할 수 있다.
# INSERT문은 저장할 열을 지정할 수 있다. 지정되지 않은 열은 기본값 또는 null이 저장된다.

INSERT INTO tcity (region, name, popu, area, metro)
VALUES ('강원', '원주', 55, 867, 'y');
# 순서를 맞춰 넣어야 한다.

DESC tcity;
INSERT INTO tcity(name, metro, region)
VALUES ('구미', 'N', '경상');
# NULL 값을 허용하는 경우 빼놓고 적어도 된다.

INSERT INTO tcity VALUES('상주', NULL, NULL, 'N', '경상');

INSERT INTO tcity VALUES
('부평', NULL, NULL, 'Y', '인천'),
('용인', NULL, NULL, 'Y', '경기'),
('서귀포', NULL, NULL, 'N', '제주');

DELETE FROM tcity;

INSERT INTO tcity (name, area, popu, metro, region) VALUES 
('서울',605,974,'y','경기'), 
('부산',765,342,'y','경상'),
('오산',42,21,'n','경기'),
('전주',205,65,'n','전라'),
('순천',910,27,'n','전라'),
('춘천',1116,27,'n','강원'),
('홍천',1819,7,'n','강원');

INSERT INTO tcity (name, area, popu, metro, region) VALUES 
('이천', 461, 21, 'n', '경기'),
('대구', 883, 248, 'y', '경상'),
('영월', 1127, 4, 'n', '강원');

INSERT INTO tcity (name, area, popu, metro, region)
SELECT factory, 940, 83, 'n', '충청'
FROM tmaker
WHERE maker = '쌍용';
# 서브쿼리 형식으로도 사용이 가능하다.

##################### 데이터 삭제 - DELETE ###############################################################

DELETE FROM tcity WHERE name = '부산';
DELETE FROM tcity WHERE region = '경기';
DELETE FROM tcity WHERE popu > 50;

SELECT * FROM tstaff;
DELETE FROM tstaff WHERE depart = '영업부';

##################### 데이터 갱신 - UPDATE ###############################################################

SELECT * FROM tcity;

UPDATE tcity SET metro = 'n' WHERE name = '영월';
UPDATE tcity SET popu = 28, metro = 'n' WHERE name = '춘천';
# UPDATE 는 셀 단위로 데이터가 갱신된다.

-- name 이 서울인 데이터의 popu는 1000 으로 region 은 충청으로 수정
UPDATE tcity SET popu = 1000, region = '충청' WHERE name = '서울';

-- name 이 오산인 데이터의 popu을 2배로 갱신
UPDATE tcity SET popu = popu * 2 WHERE name = '오산';

-- 여자 사원 모두를 차장으로 갱신
UPDATE tstaff SET grade = '차장' WHERE gender = '여' AND grade = '사원';

-- 총무부 직원의 월급을 10% 인상
UPDATE tstaff SET salary = salary * 1.1 WHERE depart = '총무부';