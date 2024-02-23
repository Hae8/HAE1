import turtle
import random

#전역 변수 선언 부분
swidth,sheight,pSize,exitCount = 300, 300, 3, 0
r,g,b,angle,dist,curX,curY = [0]*7

#메인 코드 부분
turtle.title('거북이가 마음대로 다니기')
turtle.shape('turtle')
turtle.pensize(pSize)
turtle.setup(width = swidth + 30, height = sheight + 30)
turtle.screensize(swidth,sheight)

while True :
    r = random.random()
    g = random.random()
    b = random.random()
    turtle.pencolor((r,g,b))

    angle = random.randrange(0,360)
    dist = random.randrange(1,100)
    turtle.left(angle)
    turtle.forward(dist)
    curx = turtle.xcor()
