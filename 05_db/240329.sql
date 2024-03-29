USE study_db;

##################### 테이블 생성 / 삭제 ###############################################################

CREATE TABLE students (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    birthday DATE,
    address VARCHAR(255),
    mbti CHAR(4)
);
# 테이블을 생성한다.

SELECT * FROM students;

INSERT INTO students VALUES
(NULL, '해파리', '2000-01-23', '태평양', 'ISTP'),
(NULL, '해삼', '2000-04-15', '대서양', 'ENFP'),
(NULL, '말미잘', '2000-06-17', '인도양', 'ISFJ');

DROP TABLE students;
# 테이블 자체를 삭제한다.

DELETE FROM students WHERE id = 3;
INSERT INTO students VAlUES (NULL, '말미잘', '2000-06-17', '인도양', 'ISFJ');
# 데이터를 삭제하고 수정한 뒤에도 AUTO_INCREMENT로 설정한 아이디 값은 자동으로 이어지지 않는다. - 3번은 영원히 빈칸!

ALTER TABLE students AUTO_INCREMENT = 1;
# ALTER TABLE (테이블명) AUTO_INCREMENT = 1로 재설정을 해야 자동으로 값이 이어진다.

INSERT INTO students VALUES
(NULL, '멍게', '2000-08-19', '남극해', 'ENTJ');
INSERT INTO students VALUES
(NULL, '군소', '2000-10-21', '북극해', 'INFP');

##################### 테이블 수정 ###############################################################

SELECT * FROM students;

ALTER TABLE students ADD COLUMN gender ENUM('남', '여');
# 컬럼 추가

ALTER TABLE students DROP gender;
# 컬럼 삭제

ALTER TABLE students ADD COLUMN gender ENUM('남', '여') NOT NULL DEFAULT '여';
# 컬럼을 추가할 때 기본값을 설정하는 것이 가능하다.

UPDATE students SET gender = '남' WHERE id = 4;

INSERT INTO students (`name`, `birthday`, `address`, `mbti`) 
VALUES ('산호', '2000-02-04', '인도해', 'ESTP');
INSERT INTO students
VALUES (NULL, '클리오네', '2000-12-23', '북극해', 'ESFJ', '남');

##################### 테이블 제약조건 ###############################################################

##################### NOT NULL ###############################################################

CREATE TABLE tNullable (
 name CHAR(10) NOT NULL,
 age INT
 );

SELECT * FROM tNullable;
 
INSERT INTO tNullable (name, age) VALUES ('흥부', 36);
INSERT INTO tNullable (name) VALUES ('놀부');
INSERT INTO tNullable (age) VALUES (44); # Error Code: 1364. Field 'name' doesn't have a default value
# NOT NULL으로 설정해뒀기 때문에 기본 값이 있어야 다른 값도 넣을 수 있다.

##################### DEFAULT ###############################################################

CREATE TABLE tcityDefault(
	name CHAR(10) PRIMARY KEY,
    area INT NULL,
    popu INT NULL,
    metro CHAR(1) DEFAULT 'n' NOT NULL,
    region CHAR(5) NOT NULL
);

SELECT * FROM tcityDefault;
DESC tcityDefault;

INSERT INTO tcityDefault (`name`, `area`, `popu`, `region`)
VALUES('진주', 712, 34,'경상');
INSERT INTO tcityDefault (`name`, `area`, `popu`, `metro`, `region`)
VALUES('인천', 1063, 295, 'y', '경기');
INSERT INTO tcityDefault
VALUES ('강릉', 131, 24, '강원'); # Error Code: 1136. Column count doesn't match value count at row 1
INSERT INTO tcityDefault
VALUES ('강릉', 131, 24, DEFAULT, '강원');
# 컬럼 갯수를 맞춰 적기 위해서 DEFAULT를 사용할 수 있다.

##################### CHECK ###############################################################

# 필드의 값 종류를 제한할 수 있다.
# 보통은 프론트엔드에서 유효값 처리를 주로 담당한다.

##################### 테이블 제약조건 실습 ###############################################################

CREATE TABLE tstaffDefault(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` CHAR(15) NOT NULL,
    `depart` ENUM('영업부', '총무부', '인사과') NOT NULL DEFAULT '영업부',
    `gender` ENUM('남', '여') NOT NULL DEFAULT '여',
    `joindate` DATE NOT NULL DEFAULT (CURDATE()),
    `grade` CHAR(10) NOT NULL DEFAULT '수습',
    `salary` INT NOT NULL DEFAULT 280 CHECK(salary > 0),
    `score` DECIMAL(5,2) NOT NULL DEFAULT 1.0
);

DROP TABLE tstaffDefault;
SELECT * FROM tstaffDefault;

INSERT INTO tstaffDefault
VALUES(NULL, '피카츄', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO tstaffDefault
VALUES(NULL, '라이츄', '총무부', '남', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO tstaffDefault
VALUES(NULL, '파이리', '개발부', '남', DEFAULT, DEFAULT, DEFAULT, DEFAULT); # ENUM으로 설정한 값이 맞지않으면 오류가 난다.
INSERT INTO tstaffDefault (NAME)
VALUES('꼬부기');

##################### KEY ###############################################################

# 슈퍼키(Super Key) 
-- 각 행을 유일하게 식별할 수 있는 하나 또는 그 이상의 속성들의 집합. 슈퍼키는 유일성만 만족하면 슈퍼키가 될 수 있다.
-- 2개 이상의 컬럼의 조합으로 기본키를 설정하는 것을 복합키라고 한다.

# 후보키(Candidate Key)
-- 각 행을 유일하게 식별할 수 있는 최소한의 속성들의 집합.

# 기본키(Primary Key)
-- 후보키 중에서 선정한 키로 테이블에서 오직 1개만 지정 가능. 레코드를 상징하는 값으로 자주 참조하는 속성이어야 한다.

CREATE TABLE 테이블명 (
컬럼명1 타입 [CONSTRAINT제약조건이름]
PRIMARYKEY,...);
# 컬럼 제약 조건 형태

CREATE TABLE 테이블명 (
컬럼명1 타입 [CONSTRAINT제약조건이름],
...
CONSTRAINT 제약조건이름PRIMARYKEY(컬럼명1)
);
# 테이블 제약 조건 형태

CREATE TABLE tPrimary(
	isLongHair BOOL,
    isGlasses BOOL,
    isStudent BOOL,
    CONSTRAINT ct_pk PRIMARY KEY(isLongHair, isGlasses, isStudent)
);
# 복합키로 기본키를 설정할 경우, 가장 마지막에 괄호를 사용해 적는다.
# 이 테이블은 슈퍼키, 후보키, 기본키가 같은 테이블이다.

SELECT * FROM tPrimary;
DESC tPrimary;
INSERT INTO tPrimary VALUES (0, 0, 0);
INSERT INTO tPrimary VALUES (1, 0, 0);
INSERT INTO tPrimary VALUES (0, 1, 0);
INSERT INTO tPrimary VALUES (0, 0, 1);
INSERT INTO tPrimary VALUES (1, 1, 0);
INSERT INTO tPrimary VALUES (1, 0, 1);
INSERT INTO tPrimary VALUES (0, 1, 1);
INSERT INTO tPrimary VALUES (1, 1, 1);

CREATE TABLE celebrities(
    name VARCHAR(10) PRIMARY KEY,
    job VARCHAR(10)
);
SELECT * FROM celebrities;
INSERT INTO celebrities VALUES ('석구', '배우');
INSERT INTO celebrities VALUES ('지은', '배우');
INSERT INTO celebrities VALUES ('흥민', '운동선수');
INSERT INTO celebrities VALUES ('민호', '배우');
INSERT INTO celebrities VALUES ('민호', '아이돌');
# 고유키가 겹치는 경우에는 INSERT를 하지 못한다.

##################### 제약조건 KEY 실습 ###############################################################

CREATE TABLE tstaffCompoKey(
  `name` CHAR(15) NOT NULL,
  `depart` CHAR(10) NOT NULL,
  `gender` CHAR(3) NOT NULL,
  `joindate` DATE NOT NULL,
  `grade` CHAR(10) NOT NULL,
  `salary` INT NOT NULL,
  `score` DECIMAL(5,2) DEFAULT NULL,
  PRIMARY KEY (name, depart, gender),
  CONSTRAINT uni UNIQUE (score)
);

SELECT * FROM tstaffCompoKey;
DROP TABLE tstaffCompoKey;

##################### UNIQUE ###############################################################

# 필드의 중복값을 방지하여 모든 필드가 고유한 값을 가지도록 강제
# 기본키와 차이점 - UNIQUE는 NULL을 허용

##################### 제약 조건의 추가 / 수정 / 삭제 ###############################################################

ALTER TABLE tstaffCompoKey DROP CONSTRAINT uni;
# 제약조건의 이름을 설정해서 수정, 삭제 할 수 있다.

##################### AUTO_INCREMENT ###############################################################

CREATE TABLE tSale (
	saleno INT AUTO_INCREMENT PRIMARY KEY,
    customer VARCHAR(10),
    product VARCHAR(30)
);

SELECT * FROM tSale;

INSERT INTO tSale (customer, product)
VALUES ('단군', '지팡이'), ('고주몽', '고등어');

DELETE FROM tSale WHERE saleno = 2;

INSERT INTO tSale (customer, product)
VALUES ('박혁거세', '계란');
INSERT INTO tSale
VALUES (2, '고주몽', '고등어');
# DELETE후 INSERT를 하면 중간이 비게 되므로 saleno를 지정해 넣어줘야 한다.

ALTER TABLE tSale AUTO_INCREMENT = 100;

INSERT INTO tSale (customer, product)
VALUES ('왕건', '너구리');

SELECT LAST_INSERT_ID();

UPDATE tSale SET product = '짜파게티' WHERE saleno = LAST_INSERT_ID();

##################### 참조 무결성 ###############################################################

CREATE TABLE tEmployee(
	name CHAR(10) PRIMARY KEY,
	salary INT NOT NULL,
	addr VARCHAR(30) NOT NULL
);
INSERT INTO tEmployee VALUES ('아이린', 650, '대구시');
INSERT INTO tEmployee VALUES ('슬기', 480, '안산시');
INSERT INTO tEmployee VALUES ('웬디', 625, '서울시');

CREATE TABLE tProject(
	projectID INT PRIMARY KEY,
	employee CHAR(10) NOT NULL,
	project VARCHAR(30) NOT NULL,
	cost INT
);
INSERT INTO tProject VALUES (1, '아이린', '홍콩 수출건', 800);
INSERT INTO tProject VALUES (2, '아이린', 'TV 광고건', 3400);
INSERT INTO tProject VALUES (3, '아이린', '매출분석건', 200);
INSERT INTO tProject VALUES (4, '슬기', '경영 혁신안 작성', 120);
INSERT INTO tProject VALUES (5, '슬기', '대리점 계획', 85);
INSERT INTO tProject VALUES (6, '웬디', '노조 협상건', 24);

SELECT * FROM tEmployee;
SELECT * FROM tProject;

SELECT *
FROM tEmployee e
JOIN tProject p on e.name = p.employee
WHERE e.addr = '대구시';

INSERT INTO tProject VALUE (7, '조이', '원자재 매입', 900);
DELETE FROM tEmployee WHERE name = '아이린';
# 테이블에 수정, 삭제가 이뤄져서 참조 무결성에 위배된다.

DROP TABLE tEmployee;
DROP TABLE tProject;

##################### FOREIGN KEY ###############################################################

# 기본 키와 참조 키 간의 관계가 항상 유지됨을 보장한다.

CREATE TABLE tEmployee(
	name CHAR(10) PRIMARY KEY,
	salary INT NOT NULL,
	addr VARCHAR(30) NOT NULL
);
INSERT INTO tEmployee VALUES ('아이린', 650, '대구시');
INSERT INTO tEmployee VALUES ('슬기', 480, '안산시');
INSERT INTO tEmployee VALUES ('웬디', 625, '서울시');

CREATE TABLE tProject(
	projectID INT PRIMARY KEY,
	employee CHAR(10) NOT NULL,
	project VARCHAR(30) NOT NULL,
	cost INT,
    CONSTRAINT FK_employee FOREIGN KEY (employee) REFERENCES tEmployee(name)
);
# 참조 무결성을 지키기 위해 tProject의 employee 속성을 tEmployee의 name 속성과 관계 맺는다.
# 일 대 다 관계를 맺을 때는 다수 -> 하나 의 방향으로 관계짓는다.
INSERT INTO tProject VALUES (1, '아이린', '홍콩 수출건', 800);
INSERT INTO tProject VALUES (2, '아이린', 'TV 광고건', 3400);
INSERT INTO tProject VALUES (3, '아이린', '매출분석건', 200);
INSERT INTO tProject VALUES (4, '슬기', '경영 혁신안 작성', 120);
INSERT INTO tProject VALUES (5, '슬기', '대리점 계획', 85);
INSERT INTO tProject VALUES (6, '웬디', '노조 협상건', 24);

SELECT * FROM tEmployee;
SELECT * FROM tProject;

INSERT INTO tProject VALUE (7, '조이', '원자재 매입', 900); # Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`study_db`.`tproject`, CONSTRAINT `FK_employee` FOREIGN KEY (`employee`) REFERENCES `temployee` (`name`))
# 외래키 제약조건때문에 작동하지 않는다.
DELETE FROM tEmployee WHERE name = '아이린'; # Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`study_db`.`tproject`, CONSTRAINT `FK_employee` FOREIGN KEY (`employee`) REFERENCES `temployee` (`name`))
# 외래키 제약조건때문에 작동하지 않는다.

##################### 참조 무결성 옵션 ###############################################################

# NO ACTION : 참조된 행이 수정, 삭제될 때 아무런 작업을 하지 않음
# CASCADE : 참조된 행이 수정, 삭제될 때 해당 행을 참조하는 모든 행도 함께 수정, 삭제
# SET NULL : 참조된 행이 수정, 삭제될 때 해당 외래 키를 포함하는 열의 값을 NULL로 설정
# SET DEFAULT : 참조된 행이 수정, 삭제될 때 해당 외래 키를 포함하는 열의 값을 기본값으로 설정

##################### 관계형 DB ###############################################################

﻿CREATE TABLE `Users` (
	`id`	INT	NOT NULL	COMMENT '사용자 아이디 (자동증가)',
	`email`	VARCHAR(50)	NOT NULL	COMMENT '로그인 시 사용할 이메일 주소',
	`password`	VARCHAR(100)	NOT NULL	COMMENT '사용자 비밀번호 (암호화)',
	`gender`	ENUM('남', '여')	NOT NULL	DEFAULT '여'	COMMENT '사용자 성별',
	`address`	VARCHAR(255)	NULL	COMMENT '사용자 주소',
	`birthday`	DATE	NULL	COMMENT '사용자 생일',
	`createAt`	DATETIME	NOT NULL	DEFAULT NOW	COMMENT '사용자 생성 시각',
	`updateAt`	DATETIME	NOT NULL	DEFAULT NOW	COMMENT '사용자 수정 시각',
	`deleteAt`	DATETIME	NULL	DEFAULT NOW	COMMENT '사용자 삭제 시각'
);

CREATE TABLE `Posts` (
	`id`	INT	NOT NULL	COMMENT '게시물 아이디 (자동 증가)',
	`content`	VARCHAR(255)	NOT NULL	COMMENT '사용자 게시물 작성 내용',
	`img`	VARCHAR(255)	NULL	COMMENT '게시 이미지 경로',
	`createAt`	DATETIME	NOT NULL	DEFAULT NOW	COMMENT '게시물 생성 시각',
	`updateAt`	DATETIME	NOT NULL	DEFAULT NOW	COMMENT '게시물 수정 시각',
	`userId`	INT	NOT NULL	COMMENT '사용자 아이디 (자동증가)'
);

CREATE TABLE `Hashtags` (
	`id`	INT	NOT NULL	COMMENT '해시태그 아이디  (자동 증가)',
	`Field`	VARCHAR(255)	NULL,
	`post-hashtagId`	INT	NOT NULL	COMMENT '게시물-해시태그 아이디 (자동증가)'
);

CREATE TABLE `Follow` (
	`id`	INT	NOT NULL	COMMENT '팔로우 아이디 (자동증가)',
	`followingId`	INT	NULL	COMMENT '사용자 아이디 (자동증가)',
	`followerId`	INT	NULL	COMMENT '사용자 아이디 (자동증가)'
);

CREATE TABLE `Post-Hashtag` (
	`id`	INT	NOT NULL	COMMENT '게시물-해시태그 아이디 (자동증가)',
	`postId`	INT	NOT NULL	COMMENT '게시물 아이디 (자동 증가)',
	`hashtagId`	INT	NOT NULL	COMMENT '해시태그 아이디  (자동 증가)'
);

ALTER TABLE `Users` ADD CONSTRAINT `PK_USERS` PRIMARY KEY (
	`id`
);

ALTER TABLE `Posts` ADD CONSTRAINT `PK_POSTS` PRIMARY KEY (
	`id`
);

ALTER TABLE `Hashtags` ADD CONSTRAINT `PK_HASHTAGS` PRIMARY KEY (
	`id`
);

ALTER TABLE `Follow` ADD CONSTRAINT `PK_FOLLOW` PRIMARY KEY (
	`id`
);

ALTER TABLE `Post-Hashtag` ADD CONSTRAINT `PK_POST-HASHTAG` PRIMARY KEY (
	`id`
);