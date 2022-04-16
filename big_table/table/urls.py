from django.urls import path
from .views import tableView

urlpatterns = [
    path ('', tableView.as_view (), name= 'Home')
]
