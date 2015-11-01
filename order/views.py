from django.shortcuts import render, HttpResponseRedirect
from .forms import OrderForm
from .models import Order
# Create your views here.


def home(request):
    if request.POST:
        form = OrderForm(request.POST or None)

        if form.is_valid():
            form.save()
            form = OrderForm()
    else:
        form = OrderForm()
    return render(request, "base.html", {"form":form,})
