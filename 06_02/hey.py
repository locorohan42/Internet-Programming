#Rohan Abraham
#Program is a class that holds information about a store

class RetailItem:
    #Class Hold info about a Retail Item
    def __init__(self, description, unitsInInventory, price):
        #Initializer method that sets the attributes
        self.__description = description
        self.__unitsInInventory = unitsInInventory
        self.__price = price
#
    def set_description(self, description):
        self.__description = description
        #Update the description

    def set_unitsInInventory(self, unitsInInventory):
        self.__unitsInInventory = unitsInInventory
        #Update the amount of units in the inventory

    def set_price(self, price):
        self.__price = price
        #Update the price

    def get_description(self):
        return self.__description
        #Return the description

    def get_unitsInInventory(self):
        return self.__unitsInInventory
        Return the amount of units in the inventory

    def get_price(self):
        return self.__price
        #Return the price

    def __str__(self):
        #Return the classes information as a string
        return "Description: " + self.__description + " Units in Inventory: " + str(self.__unitsInInventory) + " Price $"   + str("%.2f" % self.__price)
