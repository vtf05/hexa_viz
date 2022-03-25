from file_mech import views
from rest_framework import DefaultRouter

# create router object
router=DefaultRouter()
# register  CreateFileView with router
router.register('api',views.CreateFileView,basename='set_router')
