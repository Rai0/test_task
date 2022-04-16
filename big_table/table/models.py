from django.db import models
from django.urls import reverse
from django.utils import timezone

class tabelModel (models.Model):
    date = models.DateTimeField (verbose_name= "Дата", auto_now= False, auto_now_add= False, default= timezone.now ())
    title = models.CharField (verbose_name= "Название", max_length= 256, unique= True, blank= False, help_text= "Enter title for this field", db_index= True)
    number = models.IntegerField (verbose_name= "Количество", default= 1, null= True, blank= True, help_text= "Number of something", db_index= True)
    distance = models.DecimalField (verbose_name= "Расстояние", default= 0,  help_text= "Distance to something", db_index= True, max_digits= 10, decimal_places= 2)
    units = models.CharField (verbose_name= "Единицы измерения", max_length= 10, blank= True, help_text= "Length units", default= "km", choices= [("km", "km"), ("m", "m"), ("cm", "cm"), ("mm", "mm")],db_index= True)

    class Meta:
        verbose_name = 'Cтрока таблицы'
        verbose_name_plural = 'Cтроки таблицы'

    def get_absolute_url(self):
        return reverse("tabel_model", kwargs= {"pk": self.pk})
    
    def __str__(self) -> str:
        return self.title