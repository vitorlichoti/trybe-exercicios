def fizz_buzz(n: int) -> list:
  sequence = []
  sequence_fizz = []

  for num in range(n + 1):
    if num != 0:
     sequence.append(num)

  for num in sequence:
    if num % 3 == 0 and num % 5 == 0:
      sequence_fizz.append('FizzBuzz')  
    elif num % 5 == 0:
      sequence_fizz.append('Buzz')
    elif num % 3 == 0:
      sequence_fizz.append('Fizz')
    else:
      sequence_fizz.append(num)

  return sequence_fizz

print(fizz_buzz(15))