def draw(n: int):
  colum = ''
  j = n
  while n > 0:
    colum += '*'
    n -= 1
  while j > 0:
    j -= 1
    print(colum)
  return ''


print(draw(10))