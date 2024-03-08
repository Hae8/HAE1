import glob as gl

print(gl.glob("*")) # 현재 디렉토리에 있는 모든 파일을 리스트로 반환
print(gl.glob("0*.py")) # 현재 디렉토리에 있는 모든 0으로 시작하는 .py 파일을 리스트로 반환
print(gl.glob("../*")) # 상대 경로를 이용해 디렉토리 및 파일 리스트로 반환
print(gl.glob("C:/*")) # C 드라이브 내의 모든 디렉토리 및 파일 리스트로 반환