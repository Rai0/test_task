from graphene_django import DjangoObjectType
import graphene
from .models import *

class tableSchema (DjangoObjectType):
    class Meta:
        model = tabelModel
        
class Query(graphene.ObjectType):
    all_records = graphene.List (tableSchema)
    # records_fiels = graphene.Field (tableSchema, name=graphene.String(required=True))
    def resolve_all_records(root, info):
        return tabelModel.objects.all ()

schema = graphene.Schema (query=Query)