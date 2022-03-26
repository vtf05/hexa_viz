from replication_mech import views
from rest_framework.routers import SimpleRouter 
# create router object
router = SimpleRouter()
# register  CreateFileView with router
router.register('send_doc',views.sendDocView)
router.register('Status',views.StatusView)


urlpatterns = router.urls