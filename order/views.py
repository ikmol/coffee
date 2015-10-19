from django.shortcuts import render, HttpResponseRedirect
from .forms import OrderForm
from .models import Order
# Create your views here.

def home(request):
    if request.POST:
        form = OrderForm(request.POST)

        if form.is_valid():
            form.save()
            form = OrderForm()
            return HttpResponseRedirect("/")
    else:
        form = OrderForm()


    return render(request, "base.html", {"form":form,})