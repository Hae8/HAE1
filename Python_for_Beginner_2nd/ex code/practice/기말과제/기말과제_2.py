text="the language of truth is simple."
outStr = ""
i=0
secu=0

def secure() :
    text = "the language of truth is simple."
    outStr = ""
    for i in range(0,len(text)):
        ch = text[i]
        if text[i] == "":
            chNum = ord(ch)
            chNum
            ch2 = chr(chNum)
            outStr = outStr + ch2
        else:
            chNum = ord(ch)
            chNum = chNum + 3
            ch2 = chr(chNum)
            outStr = outStr + ch2
    return outStr

def recover() :
    outStr = ""
    for i in range(0,len(security)):
        ch = security[i]
        if security[i] == "":
            chNum = ord(ch)
            chNum = chNum
            ch2 = chr(chNum)
            outStr = outStr + ch2
        else:
            chNum = ord(ch)
            chNum = chNum -3
            ch2 = chr(chNum)
            outStr = outStr + ch2
    return outStr

security = secure()
recovery = recover()


print(f"텍스트: {text}\n암호문: {security}\n암호해석: {recovery}")
