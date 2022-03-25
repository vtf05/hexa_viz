from security_mech import views
from rest_framework.routers import SimpleRouter 
# create router object
router = SimpleRouter()
# register  CreateFileView with router
router.register('',views.CreateSecurityMechanismView,)


urlpatterns = router.urls