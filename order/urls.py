from django.conf.urls import url, patterns
from django.contrib import admin
from . import views



urlpatterns = patterns('',
    url(r'^$', 'order.views.home', name='home'),
)