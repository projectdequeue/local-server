from django.shortcuts import render
from django.shortcuts import render_to_response
from film.models import Film
from django.db.models import Q


from django.http import HttpResponse
import datetime
#from datetime import timedelta


now=datetime.datetime.now()
curr_date=now.date()
curr_time=now.time()


def view_film(request):
	return render_to_response('view_film.html',{"film_list": Film.objects.filter (show_timing__gte=curr_time) })
	
def selected_film(request):
	num=request.GET.get('filmid','')
	return render_to_response('selected_film.html',{"selected_film": Film.objects.filter(film_id__exact=num) })	
	

	
