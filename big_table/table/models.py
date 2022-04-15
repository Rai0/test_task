from django.db import models

class tabelModel (models.Model):

    date = models.DateTimeField (default= "", blank= False)
    name = models.CharField (max_length= 256, unique= True, blank= False, help_text= "Enter name of the field", error_messages= "You fogote enter name", db_index= True)
    number = models.IntegerField (null= True ,blank= True, db_index= True)
    distance = models.FloatField (null= False ,blank= True, db_index= True)

    def __str__(self) -> str:
        return self.name