//FutureLearn-ComputerProgrammingForEveryone-CodingLanguages
print("Temperature Converter")
print("---------------------")

input_celsius = input("What is the temperature in °C? ") //alt 0176
celsius = float(input_celsius)

fahrenheit = celsius * 9 / 5 + 32
 
 print("In fahrenheit, that's " + str(fahrenheit) + "°F.")
 
 if(celsius > 26):
   print("Phew, that's hot!")
