import json
from django.http import JsonResponse
from django import forms
from django.http import HttpResponse
from .models import Order

"""
class AjaxableResponseMixin(object):

    #Mixin to add AJAX support to a form.
    #Must be used with an object-based FormView (e.g. CreateView)

    def form_invalid(self, form):
        response = super(AjaxableResponseMixin, self).form_invalid(form)
        if self.request.is_ajax():
            return JsonResponse(form.errors, status=400)
        else:
            return response

    def form_valid(self, form):
        # We make sure to call the parent's form_valid() method because
        # it might do some processing (in the case of CreateView, it will
        # call form.save() for example).
        response = super(AjaxableResponseMixin, self).form_valid(form)
        if self.request.is_ajax():
            data = {
                'pk': self.object.pk,
            }
            return JsonResponse(data)
        else:
            return response
"""

class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields =['name','phone',]
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Ім’я', 'class': 'form-control',}),
            'phone': forms.TextInput(attrs={'placeholder': 'Телефон', 'class': 'form-control',}),
        }