import json
import time
from django.shortcuts import render
from django.http import HttpResponseBadRequest, HttpResponse
from django.conf import settings
from .forms import OrderForm
from .models import Order
# Create your views here.


def home(request):
    if request.POST:
        if settings.DEBUG:
            time.sleep(2)  # Only for load demo
        form = OrderForm(request.POST or None)
        if form.is_valid():
            new_commit = form.save(commit=False)

            if request.is_ajax():
                new_commit.save()
                return HttpResponse('OK')
            else:
                form = OrderForm()
        else:
            if request.is_ajax():
                errors_dict = {}
                if form.errors:
                    for error in form.errors:
                        e = form.errors[error]
                        errors_dict[error] = str(e)
                return HttpResponseBadRequest(json.dumps(errors_dict), content_type="application/json")
    else:
        form = OrderForm()

    return render(request, "base.html", {"form": form})
