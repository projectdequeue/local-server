from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.template import RequestContext
from film.models import Film
from hall.models import Hall

from django.views.decorators.cache import cache_control
from django.contrib.auth.decorators import login_required,user_passes_test

@login_required
@cache_control(no_cache=True, must_revalidate=True,no_store=True)
def buy_ticket(request):
	filmid=request.GET.get('filmid','')
	tickets=long(request.POST['number_of_tickets'])	

	selected_film=Film.objects.get(film_id__exact=filmid)
	hall_id=selected_film.hall_id
	
	film_hall=Hall.objects.get(hall_id__exact=hall_id)
	total_seats=film_hall.total_seats	
	seats_allocated=film_hall.total_seats_allocated

	seats_available=total_seats - seats_allocated
	amount_payable=tickets*selected_film.ticket_charge
	if(seats_available>tickets):
		film_hall.total_seats_allocated +=tickets
		film_hall.save()
		return render_to_response('buy_ticket.html',{'amount':amount_payable,"selected_film": Film.objects.filter(film_id__exact=filmid) },context_instance=RequestContext(request))	

	else:
		return HttpResponse("Seats Not Available")
