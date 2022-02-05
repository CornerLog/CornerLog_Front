from django.db import models

#방명록 model
class UserLog(models.Model):
    author = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    content = models.CharField(max_length=1000)