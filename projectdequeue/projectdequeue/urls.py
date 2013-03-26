from django.conf.urls import patterns, include, url


# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('', 
	 url(r'^static/(?P<path>.*)$',
        'django.views.static.serve',
        {'document_root': 'static'}
  ),
    # Examples:
    # url(r'^$', 'projectdequeue.views.home', name='home'),
    url(r'^$', 'login.views.userlogin'),
    url(r'^welcome/$', 'login.views.welcome'),
	url(r'view_film/$', 'film.views.view_film'),
    
    # url(r'^projectdequeue/', include('projectdequeue.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
