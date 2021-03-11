num = 0

try:
    print (10/num)
except ValueError:
    print("Can't covert to int")
except ZeroDivisionError:
    print("Can't divide with 0")
except:
    print("Other Error")
