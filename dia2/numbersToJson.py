import sys
import os
import json
import pprint

INPUT_FILE = "numbers.txt"
OUTPUT_FILE = "numbers.json"


fileIn = open(INPUT_FILE,"rb")

numberData = []

for i in range(1,101):
    numberData.append(0)


for row in fileIn:
    number = int(row.rstrip())
    print number
    numberData[number]+=1

fileIn.close()

fileOut = file(OUTPUT_FILE,"wb")

json.dump(numberData,fileOut)

fileOut.close()

