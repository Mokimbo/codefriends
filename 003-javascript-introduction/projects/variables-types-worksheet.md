# 1: evaluate 100+4 | Type: Number | Value: 104
# 2: evaluate 'a'+'b' | Type: String | Value: 'ab'
# 3: evaluate 'Bob'+'Smith' | Type: String | Value: 'BobSmith'
# 4: evaluate '7'+'9' | Type: String | Value: '79'
# 5: evaluate '7'+9 | Type: String | Value: '79'
# 6: evaluate '7'-9 | Type: Number | Value: -2
# 7: evaluate 'abc'*3 | Type: Undefined | Value: NaN
# 8: evaluate 7+2*3 | Type: Number | Value: 13
# 9: evaluate (7+2)*3 | Type: Number | Value: 27
# 10: evaluate (null+2)/3 | Type: Number | Value: 0.666~
# 11: const name; | evaluate name | Unable to evaluate since name was not defined
# 12: const x = 7; | const y = 4; | const z = x * y; | evaluate z-3 | Type: Number | Value: 25
# 13: const a = true; | const b = false; | evaluate a && b | Type: boolean | Value: false
# 14: const a = true; | const b = false; | evaluate a || b | Type: boolean | Value: true
# 15: let foo = 3; | foo++; | foo++; | evaluate foo/2 | Type: Number | Value: 2.5
# 16: const age = 29.8; | const wholeAge = Math.floor(age); | const nextAge = Math.ceil(age); | evaluate nextAge - wholeAge | Type: Number | Value: 1
# 17: evaluate '5'+3-3 | Type: Number | Value: 50
# 18: let isRed = false; | isRed = !isRed; | evaluate isRed | Type: boolean | Value: true
# 19: let isBlue = true; | let isBlue = !!isBlue; | evaluate isBlue | Type: boolean | Value: true
# 20: const name = 'Sally'; | const age = 25; | evaluate name.length + age | Type: Number | Value: 30
# 21: const x = 10; | const y = 73.3; | const point = '[' + x + ', ' + y + ']'; | evaluate 'point: '+point | Type: String | Value: 'point: [10, 73.3]'
# 22: const numberOfSheep = 16; | const numberOfGoats = 3; | evaluate numberOfGoats + numberOfSheep++ | unable to evaluate since numberOfSheep is a constant
# 23: const numberOfSheep = 16; | const numberOfGoats = 3; | evaluate numberOfGoats - ++numberOfSheep | unable to evaluate since numberOfSheep is a constant
# 24: const x; | const y = (x=7); | evaluate y | Type: Number | Value: 7 (technically shouldn't work since you cant redefine x)