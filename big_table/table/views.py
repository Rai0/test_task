from rest_framework import generics
from .models import tabelModel
from .serializers import tabelSerializers
from .paginator import tabletPagination

# Create your views here.
class tableView (generics.ListAPIView):
    queryset = tabelModel.objects.all ()
    serializer_class = tabelSerializers
    pagination_class = tabletPagination