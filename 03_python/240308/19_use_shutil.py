import glob as gl
import shutil as sh

sh.copy("src.txt", "src copy.txt") # copy("경로+파일명", "경로 및 파일명")

# for txt in gl.glob("*.txt"):
#     sh.copy(txt, 'c'+txt)

sh.move("src.txt", "../") # move("경로+파일명", "경로 및 파일명")