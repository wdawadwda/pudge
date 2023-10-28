import os

from ..variables.variables import path_media_save
class Helper:

    def collect_full_clubs_json(self, clubs:list):
        clubs_set = list()
        for club in clubs:
            club = dict(club)
            club['club']['id'] = club['id']
            clubs_set.append(club['club'])
        return clubs_set

    def handle_uploaded_file(self, file):
        # os.chmod(path_media_save, 775)
        file_name = file.name
        with open(f"{path_media_save}{file_name}", "wb+") as destination:
            for chunk in file.chunks():
                destination.write(chunk)