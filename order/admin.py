from django.contrib import admin
from .models import Order
from .forms import OrderForm
# Register your models here.



class OrderAdmin(admin.ModelAdmin):
    list_display = ["__str__", "name", "timestamp",]
    form = OrderForm

admin.site.register(Order, OrderAdmin)