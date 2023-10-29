from django import forms


class ClubsForm(forms.Form):
    name = forms.CharField()
    map = forms.CharField()
    img = forms.FileField()
    contacts = forms.JSONField()
    priceData = forms.JSONField()
    computerSpecs = forms.JSONField()
    quantityComputers = forms.JSONField()

    def get_absolute_url(self):
      return self.img.url

# class Club2Form(forms.Form):
#     name = forms.CharField()
#     map = forms.CharField()
#     img = forms.FileField()
#     contacts = forms.JSONField()
#     priceData = forms.JSONField()
#     computerSpecs = forms.JSONField()
#     quantityComputers = forms.JSONField()
#
#

