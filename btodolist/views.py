from django.shortcuts import render_to_response
from django.template import RequestContext


def home(request):
    """
        A index view.
    """
    template_name = "index.html"
    return render_to_response(template_name, context_instance=RequestContext(request))
