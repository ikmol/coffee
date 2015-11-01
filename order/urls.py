from django.conf.urls import url, patterns
from django.contrib import admin



urlpatterns = patterns('',
    url(r'^$', 'order.views.home', name='home'),
)