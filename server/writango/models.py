# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(User, null=True, blank=True)
    session = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    text = models.TextField(blank=True, null=True)
    slug = models.SlugField(max_length=255)
    is_published = models.BooleanField(default=False)
    likes = models.IntegerField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    class Meta:
        pass

    def save(self, reslug=False, *args, **kwargs):
        if not self.id or reslug == True:
            # Newly created object, so set slug
            random_number = User.objects.make_random_password(length=10, allowed_chars='123456789')
            self.slug = slugify(self.title + '-' + random_number)

        super(Post, self).save(*args, **kwargs)



    def __str__(self):
        if self.author and self.author.is_authenticated():
            return self.author.email + ' > ' + self.slug
        else:
            return 'anonymous > ' + self.slug