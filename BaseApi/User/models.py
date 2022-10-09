from django.db import models

# Create your models here.
class Profile(models.Model):
    username = models.CharField(max_length=12,default='')
    first_name = models.CharField(max_length=30,default='')
    last_name = models.CharField(max_length=30,default='')
    email = models.EmailField(max_length=120,default='')
    age = models.DateField()
    password = models.CharField(max_length=30,default='')


    def __str__(self):
        return self.username