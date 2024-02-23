from tkinter import*
from tkinter import messagebox

##함수 선언 부분##
def keyEvent(event):
    txt =""
    if event.keycode == 37:
        messagebox.showinfo("키보드 이벤트", "눌린 키: Shift+왼쪽화살표 ")
    elif event.keycode ==38:
        messagebox.showinfo("키보드 이벤트", "눌린 키: Shift+위쪽화살표 ")
    elif event.keycode ==39:
        messagebox.showinfo("키보드 이벤트", "눌린 키: Shift+오른쪽화살표 ")
    else:
        messagebox.showinfo("키보드 이벤트", "눌린 키: Shift+아래쪽화살표 ")

##메인 코드 부분##             
window = Tk()

window.bind("<Shift-Up>", keyEvent)
window.bind("<Shift-Down>", keyEvent)
window.bind("<Shift-Left>", keyEvent)
window.bind("<Shift-Right>", keyEvent)


window.mainloop()
