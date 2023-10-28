from django import forms


class UploadFileForm(forms.Form):
    clubName = forms.CharField(max_length=100)
    clubPhone = forms.CharField(max_length=30)
    clubPhoto = forms.FileField()

    # def get_absolute_url(self):
    #   return self.clubPhoto.url

