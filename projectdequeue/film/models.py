from django.db import models

class Film(models.Model):
	nowshowing='nowshowing'
	nextchage='nextchange'
	film_status_choices=(
		(nowshowing, 'Now Showing'),
		(nextchage, 'Next Change'),
	)
		
	film_id=models.IntegerField()
	film_name=models.CharField(max_length=100)
	film_image = models.ImageField('Label', upload_to='img')
	release_date=models.DateField()
	show_timing=models.TimeField()
	ticket_charge=models.IntegerField()
	film_status=models.CharField(max_length=50, choices=film_status_choices, default=nowshowing)
	hall_id=models.IntegerField()
	slug=models.SlugField(unique=True)
	description=models.TextField()

	def __unicode__(self):
		return self.film_name
	
