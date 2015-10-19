from django.db import models

# Create your models here.

class Order(models.Model):
    name = models.CharField(max_length=120, null=False)
    phone = models.CharField(max_length=15, null=False)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return self.name