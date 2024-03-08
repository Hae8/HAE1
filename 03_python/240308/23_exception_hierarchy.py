def exception_hieratchy(e_class, indent = 0):
    # 들여 쓰기를 이용해 예외 클래스 이름 출력
    print(" " * indent + e_class.__name__)

    # 예외 클래스의 자식 클래스 목록 가져오기
    sub_e_classes = e_class.__subclasses__()
    for sub_class in sub_e_classes:
        exception_hieratchy(sub_class, indent + 2)
        
exception_hieratchy(BaseException)

# 예외처리 계층도
# BaseException
#   BaseExceptionGroup
#     ExceptionGroup
#   Exception
#     ArithmeticError
#       FloatingPointError
#       OverflowError
#       ZeroDivisionError
#     AssertionError
#     AttributeError
#     BufferError
#     EOFError
#     ImportError
#       ModuleNotFoundError
#       ZipImportError
#     LookupError
#       IndexError
#       KeyError
#       CodecRegistryError
#     MemoryError
#     NameError
#       UnboundLocalError
#     OSError
#       BlockingIOError
#       ChildProcessError
#       ConnectionError
#         BrokenPipeError
#         ConnectionAbortedError
#         ConnectionRefusedError
#         ConnectionResetError
#       FileExistsError
#       FileNotFoundError
#       InterruptedError
#       IsADirectoryError
#       NotADirectoryError
#       PermissionError
#       ProcessLookupError
#       TimeoutError
#       UnsupportedOperation
#     ReferenceError
#     RuntimeError
#       NotImplementedError
#       RecursionError
#       _DeadlockError
#     StopAsyncIteration
#     StopIteration
#     SyntaxError
#       IndentationError
#         TabError
#     SystemError
#       CodecRegistryError
#     TypeError
#     ValueError
#       UnicodeError
#         UnicodeDecodeError
#         UnicodeEncodeError
#         UnicodeTranslateError
#       UnsupportedOperation
#     Warning
#       BytesWarning
#       DeprecationWarning
#       EncodingWarning
#       FutureWarning
#       ImportWarning
#       PendingDeprecationWarning
#       ResourceWarning
#       RuntimeWarning
#       SyntaxWarning
#       UnicodeWarning
#       UserWarning
#     ExceptionGroup
#   GeneratorExit
#   KeyboardInterrupt
#   SystemExit