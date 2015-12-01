from django.conf.urls import url, patterns



urlpatterns = patterns('',
    url(r'^$', 'order.views.home', name='home'),
)