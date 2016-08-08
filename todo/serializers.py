from rest_framework import serializers
from todo.models import TodoItem


class TodoItemSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        if attrs['due_date'] < attrs['start_date']:
            raise serializers.ValidationError("Start date should be earlier than due date")
        return attrs

    class Meta:
        model = TodoItem
        fields = ('id', 'title', 'start_date', 'due_date', 'desc', 'done')
