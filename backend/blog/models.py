from django.db import models

# Create your models here.
class Blog(models.Model):
    blogtext=models.TextField()
    comments=models.TextField()
    bloger=models.CharField(max_length=100)

    def __str__(self):
      return self.blogtext