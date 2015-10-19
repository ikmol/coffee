from django.shortcuts import render
from order.forms import OrderForm


def home(request):
    form = OrderForm(request.POST or None)
    context ={
        "form": form,
    }
    if form.is_valid():
        form.save()
    return render(request, "base.html", context)
