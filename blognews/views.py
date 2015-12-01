from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import BlogPost
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger, InvalidPage
# Create your views here.


class BlogPostListView(ListView):
    model = BlogPost
    paginate_by = 5

    def get_context_data(self, **kwargs):
        context = super(BlogPostListView, self).get_context_data(**kwargs)
        list_blog = BlogPost.objects.all()
        paginator = Paginator(list_blog, self.paginate_by)
        page = self.request.GET.get('page')

        try:
            file_blog = paginator.page(page)
        except PageNotAnInteger:
            file_blog = paginator.page(1)
        except EmptyPage:
            file_blog = paginator.page(paginator.num_pages)
        context['list_blogs'] = file_blog
        return context

class BlogPostDetailView(DetailView):
    model = BlogPost


