

from ast import While
from shutil import which


a = input('')
b = input('')

if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
elif a > b:
    print('a is greater than b')

print('*************')

i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")

  
  
