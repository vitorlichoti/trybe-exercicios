def avg(arr: list):
  soma = 0
  for item in arr:
    soma += item
  return soma / len(arr)

print(avg([1, 2, 3, 4, 5]))