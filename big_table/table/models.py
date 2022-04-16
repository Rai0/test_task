from django.db import models
from django.urls import reverse
from datetime import datetime
import pytz

class tabelModel (models.Model):
    # enter this for get today in datetime on DateTimeField
    timezone = pytz.timezone("Europe/Moscow")
    date = models.DateTimeField (verbose_name= "Дата", auto_now= False, auto_now_add= False, default= timezone.localize (datetime.today ()))

    title = models.CharField (verbose_name= "Название", max_length= 256, unique= True, blank= False, help_text= "Enter title for this field", db_index= True)
    number = models.IntegerField (verbose_name= "Количество", default= 1, null= True, blank= True, db_index= True)
    distance = models.DecimalField (verbose_name= "Расстояние", default= 0, db_index= True, max_digits= 40, decimal_places= 2)

    class Meta:
        db_table = 'tabels'
        managed = True
        verbose_name = 'Cтрока таблицы'
        verbose_name_plural = 'Cтроки таблицы'

    def get_absolute_url(self):
        return reverse("tabel_model", kwargs={"pk": self.pk})
    
    def __str__(self) -> str:
        return self.title