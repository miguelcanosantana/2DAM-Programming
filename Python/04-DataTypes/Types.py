#lists
list1 = [2,4,6,8,10]

for num in list1:
    print(num)

print (2 in list1)
print (3 in list1)

list1 += [12, 14, 16]
print(list1)
list1 *= 2
print(list1)
print(list1[0])
print(len(list1))

#maps
def printIt(number): print(number)
list(map(printIt, list1))

#tuples
tuple1 = tuple([1,2,3])
print(tuple1)

#iterators
iter1 = iter([5,7,9])
print(next(iter1))
print(next(iter1))
print(next(iter1))

#dictionaries
dict1 = dict(one=1, two=2, three=3)
print(dict1)

dict2 = {}
dict2["one"]=1
dict2["two"]=2
dict2["three"]=3
print(dict2)



