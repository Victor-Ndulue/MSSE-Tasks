from abc import ABC, abstractmethod

class BakedGood(ABC):
    def __init__(self, flavor, date_baked):
        self.flav = flavor
        self.date_baked = date_baked
        
    @abstractmethod
    def expire(self):
        pass

class pie(BakedGood):
    def __init__(self, flavor, date_baked, crust_style):
        super().__init__(flavor, date_baked)
        self.diameter = crust_style
    def expire(self):
        print("called expire().")

pie1 = pie('apple', 'yesterday', 'deep-dish')
pie1.expire()

print(isinstance(pie1, pie))  
print(isinstance(pie1, BakedGood)) 
   