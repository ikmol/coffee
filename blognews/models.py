from django.db import models

# Create your models here.



class BlogPost(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=125)
    body = models.TextField(max_length=10000)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-timestamp',)

    @models.permalink
    def get_absolute_url(self):
        return ('post', (), {'pk': self.pk,})