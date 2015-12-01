from django.conf.urls import url, patterns

from .views import *


urlpatterns = patterns('',
    url(r'^$', BlogPostListView.as_view()),
    url(r'^(?P<pk>\d+)/$', BlogPostDetailView.as_view(), name='post'),
)