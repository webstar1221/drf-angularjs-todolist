from django.conf import settings
from django.conf.urls import patterns, include, url
from rest_framework import routers
from todo import views as todoviews

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'todoitems', todoviews.TodoItemViewSet)

urlpatterns = patterns(
    '',
    # static
    (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),

    # index
    url(r'^$', 'btodolist.views.home', name="home"),

    # todo list rest api
    url(r'api/', include(router.urls)),
)
