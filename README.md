# Roman Numerals Kata.

Write a program to convert Arabic numbers into their Roman numeral equivalents.

The Romans wrote their numbers using combinations of the following letters:

Number	Numeral
1	I
5	V
10	X
50	L
100	C
500	D
1000	M

## Iterations

1. To start, for the numbers 1-4, we would use the 'I' symbol in multiples to represent the number.

Number	Numeral
1	I
2	II
3	III
4	IIII

2. represent the numbers from 5 to 9 without using subtractions or exceptions.

Number	Numeral
6	VI
7	VII
8	VIII
9	VIIII

3. represent the numbers from 10 to 90 without using subtractions or exceptions.

Number	Numeral
10	X
20	XX
30	XXX
40	XXXX
50	L
60	LX
70	LXX
80	LXXX
90	LXXXX

4. complete the exceptions for numbers 4 and 9 - 40 and 90. (The symbols 'I' and 'X' can be repeated at most 3 times)
5. Make sure base 5 symbols cannot be used for subtraction or duplication. Example: 45 is XLV, but 15 is not VVV (If applicable).
6. Complete numbers up to one thousand (or the order of the thousands) including restrictions.

## Warnings

1. The 'base 5' symbols 'V', 'L' and 'D' can never be repeated.
2. The 'base 5' symbols 'V', 'L' and 'D' cannot be used for subtraction.
3. The 'base 1' symbols ('I', 'X', 'C', 'M') can be subtracted from the next highest 'base 5' symbol ('V', 'L', 'D') or 'base symbol 1', but only one occurrence is allowed.



