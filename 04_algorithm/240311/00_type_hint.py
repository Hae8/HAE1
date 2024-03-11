def isMinus(a:int, b:int) -> bool:
    return True if a - b < 0 else False
    
print(isMinus(1, 2)) # T
print(isMinus(3, 2)) # F

# mypy 00_type_hint.py - mypy를 통해 에러를 확인할 수 있다.