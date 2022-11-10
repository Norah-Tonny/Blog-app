from django.db import models

# Create your models here.
class Blog(models.Model):
    blogtitle=models.TextField()
    blogdescription=models.TextField()
    bloger=models.CharField(max_length=100)

    def __str__(self):
      return self.blogtitle


class Comment(models.Model):
   Blog=models.ForeignKey(Blog,on_delete=models.CASCADE,primary_key='True')
   Comment=models.TextField(max_length=250)
   
   def __str__(self):
    return self.Comment