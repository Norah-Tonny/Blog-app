from django.db import models
from django.utils.translation import gettext_lazy as _

def upload_to(instance,filename):
  return 'blogs/{filename}'.format(filename=filename)

# Create your models here.
class Blog(models.Model):
    blogtitle=models.TextField()
    blogdescription=models.TextField()
    blogpost=models.TextField(null=True)
    bloger=models.CharField(max_length=100)
    slug=models.SlugField(max_length=100,null=True)
    image=models.ImageField(_("Image"),upload_to=upload_to,default='blogs/default.jpeg')

    def __str__(self):
      return self.blogtitle


class Comment(models.Model):
    blog=models.ForeignKey(Blog, on_delete=models.CASCADE)
    comment=models.TextField()
    
    def __str__(self):
        return self.comment


