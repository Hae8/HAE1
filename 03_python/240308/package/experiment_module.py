# print('실험 모듈을 읽었습니다.', __name__)

# 모듈 내에서 동작 시: 실험 모듈을 읽었습니다. __main__
# 모듈을 호출하여 동작 시: 실험 모듈을 읽었습니다. experiment_module

def say():
    if __name__ == "__main__":
        print('이곳에서 실행')
    else:
        print('모듈로써 호출받아 실행')
        
say()