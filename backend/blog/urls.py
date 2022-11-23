
from django.contrib import admin
from rest_framework import routers
from django.urls import path, include
from blog import views
from django.conf.urls.static import static
from django.conf import settings
router=routers.DefaultRouter()
router.register(r"blogs",views.BlogView,"blog")
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import UserView,CustomTokenObtainPairview

urlpatterns=[
    path('token/obtain',CustomTokenObtainPairview.as_view(), name='token_obtain_pair'),
    path('token/refresh',TokenRefreshView.as_view(), name='token_refresh'),                                                                                         
    path('user/create',UserView.as_view(),name="ctreate_user")
]
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include(router.urls)),
#     path('api/auth/',include('blog.urls'))
# ]
# if settings.DEBUG:
#     urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)







