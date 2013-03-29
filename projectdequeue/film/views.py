from django.shortcuts import render_to_response
from film.models import Film
from django.db.models import Q
from django.template import RequestContext
from django.http import HttpResponse

import datetime

now=datetime.datetime.now()
curr_date=now.date()
curr_time=now.time()




def view_film(request):
	return render_to_response('view_film.html',{"film_list": Film.objects.filter (show_timing__gte=curr_time) },context_instance=RequestContext(request))
	
def selected_film(request):
	filmid=request.GET.get('filmid','')
	return render_to_response('selected_film.html',{"selected_film": Film.objects.filter(film_id__exact=filmid) },context_instance=RequestContext(request))	

def get_ticket(request):
	amount_payable=request.GET.get('amount','')
	return HttpResponse("hai")


