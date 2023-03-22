def biggerName(names: list):
  countCharList = []
  for name in names:
    countCharList.append(len(name))

  position = countCharList.index(max(countCharList))

  return names[position]

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", "BabaGanushe"]
print(biggerName(names))