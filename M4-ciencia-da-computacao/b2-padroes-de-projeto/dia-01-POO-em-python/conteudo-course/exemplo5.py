class Customer:
    def __init__(self, name, email):
        self.name = name
        self.__email = email
    
    @property
    def email(self):
        return self.__email
      
    @email.setter
    def email(self, value):
        self.__email = value
    
    def show_details(self):
        print(f'{self.name} {self.__email}')
 
       
customer = Customer('askdna', 'aisdhas')
print(customer.show_details())