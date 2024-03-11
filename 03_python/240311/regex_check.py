import re
def match_check(regex, str):
    if re.search(regex,str):
        print(f'{regex} : {str} is OK')
    else:
        print(f'{regex} : {str} is \033[101m NOT \033[0m OK')