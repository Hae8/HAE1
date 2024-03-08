import time as t # 시간과 관련된 모듈

now = t.time() # 시간을 초단위(UTC)로 반환
print(now) # 1709878110.2368402

current_time = t.localtime() # 시간을 (연, 월, 일, 시, 분, 초, 요일, 연일, 서머타임여부)의 형태로 반환
print(current_time) # time.struct_time(tm_year=2024, tm_mon=3, tm_mday=8, tm_hour=15, tm_min=11, tm_sec=3, tm_wday=4, tm_yday=68, tm_isdst=0)

current_str = t.asctime() # 시간을 "요일 월  일 시:분:초 연도" 순서의 문자열로 반환
print(current_str) # Fri Mar  8 15:13:32 2024

print('a')
t.sleep(3) # 반복문 등에서 활용, sleep(초)만큼 딜레이
print('b')