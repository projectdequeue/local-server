from django.shortcuts import render_to_response
from film.models import Film
from login.models import EndUser
from ticket.models import Ticket
from django.db.models import Q
from django.template import RequestContext
from django.http import HttpResponse
from django.contrib.auth.models import User

from django.views.decorators.cache import cache_control
from django.contrib.auth.decorators import login_required,user_passes_test
#<a href="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=sumod" download="filename.jpg"><img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=sumod"></a>
import datetime
from datetime import timedelta

now=datetime.datetime.now()
curr_date=now.date()
curr_time=now.time()
curr_hour=now.hour

date=datetime.datetime.combine(curr_date,curr_time)

@login_required
@cache_control(no_cache=True, must_revalidate=True,no_store=True)
def view_film(request):
	#return HttpResponse(date)
	
	return render_to_response( 'view_film.html',{ "film_list": Film.objects.filter(show_timing__gte=curr_time ) },context_instance=RequestContext(request) )



@login_required
@cache_control(no_cache=True, must_revalidate=True,no_store=True)
def selected_film(request):
	filmid=request.GET.get('filmid','')
	return render_to_response('selected_film.html',{"selected_film": Film.objects.filter(film_id__exact=filmid) },context_instance=RequestContext(request))	

@login_required
@cache_control(no_cache=True, must_revalidate=True,no_store=True)
def get_ticket(request):
	amount_payable=int(request.GET.get('amount',''))
	filmid=request.GET.get('filmid','')
	film=Film.objects.get(film_id__exact=filmid)
	user=User.objects.get(username__exact=request.user)
	enduser=EndUser.objects.get(user_id__exact=user.id)
	if(enduser.credits < amount_payable):
		return HttpResponse("No Enough Credits")
	else:
		enduser.credits-=amount_payable
		enduser.save()
		ticket=Ticket(film_name=film.film_name,end_user=request.user,purchase_datetime=now,ticket_amount=amount_payable)
		ticket.save()
		return render_to_response('download_ticket.html',{"filmid":filmid,"user":user.id,"date":now,"amount":amount_payable},context_instance=RequestContext(request))	


