from django.shortcuts import render_to_response
from django.template import RequestContext
from film.models import Film
#from django.db.models import Q
#from django.http import HttpResponse
import datetime
#from datetime import timedelta


now=datetime.datetime.now()
curr_date=now.date()
curr_time=now.time()


def view_film(request):
	#film_list=Film.objects.filter(ticket_charge="100"),	
	#return render(request,'view_film.html',{"film_list": Film.objects.filter (show_timing__gte=curr_time) })
	#return render(request,'customer_page.html',{"film_list":Film.objects.all()})
	#return HttpResponse(show_datetime)
	films=Film.objects.all()
	context={'film_list':films}
	return render_to_response('index.html', context, context_instance=RequestContext(request))

def buy_ticket(request):
	num=request.POST['film_id']	
	return HttpResponse(num)

	
def specific_film(request, filmslug):
	film=Film.objects.get(slug=filmslug)
	context={'specificfilm': film}
	return render_to_response('specific-film.html', context, context_instance=RequestContext(request))

