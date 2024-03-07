# 친절한 함수 만들기

def plus(a:int, b:int) -> int:
    """두 개의 정수를 합쳐서 반환한다. by. 해파리

    Args:
        a (int): 첫 번째 정수
        b (int): 두 번째 정수

    Returns:
        int: 합한 값을 반환한다.
    """
    return a + b

plus(1, 2) # 가이드가 나온다. (a: int, b: int) -> int
help(plus)