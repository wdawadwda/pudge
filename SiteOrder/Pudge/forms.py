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

class GalleryForm(forms.Form):
    name = forms.CharField()
    img = forms.FileField()

    def get_absolute_url(self):
        return self.img.url


class NewsForm(forms.Form):
    title = forms.CharField()
    img = forms.FileField()
    text1 = forms.CharField()
    text2 = forms.CharField(required=False)
    text3 = forms.CharField(required=False)

    def get_absolute_url(self):
        return self.img.url
