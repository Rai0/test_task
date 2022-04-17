from rest_framework import generics
from .models import tabelModel
from .serializers import tabelSerializers

# Create your views here.
class tableView (generics.ListAPIView):
    queryset = tabelModel.objects.all ()
    serializer_class = tabelSerializers