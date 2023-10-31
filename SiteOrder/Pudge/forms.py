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

class SendInfoToUserForm(forms.Form):
    name = forms.CharField()
    phoneNumber = forms.CharField()
    usernameTelegram = forms.CharField()
    clubName = forms.CharField()
    reservationTime = forms.CharField()
    seatsNumber =  forms.IntegerField()
    clubEMail = forms.CharField()

class NewClubsTestForm(forms.Form):
    name = forms.CharField()
    map = forms.CharField()
    img = forms.FileField()


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

