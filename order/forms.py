from django import forms

from .models import Order

class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields =['name','phone',]
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Ім’я', 'class': 'form-control',}),
            'phone': forms.TextInput(attrs={'placeholder': 'Телефон', 'class': 'form-control',}),
        }