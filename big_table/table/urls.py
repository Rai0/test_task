from django.urls import path
from .views import tableView
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from table.schema import schema


urlpatterns = [
    path ('table', tableView.as_view (), name= 'table api'),
    path ('graphql', csrf_exempt (GraphQLView.as_view (graphiql= True, schema= schema)))
]
