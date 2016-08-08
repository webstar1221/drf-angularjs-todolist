from django.db import models


class TodoItem(models.Model):
    title = models.CharField(max_length=100)
    start_date = models.DateTimeField()
    due_date = models.DateTimeField()
    desc = models.TextField()
    done = models.BooleanField(default=False)
