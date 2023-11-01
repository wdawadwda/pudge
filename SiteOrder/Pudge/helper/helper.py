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

    def check_the_fields(self, request, custom_request, request_data_field_key):
        request.data[request_data_field_key].pop('name')

        if not custom_request:
            return request.data[request_data_field_key]

        keys = list(request.data.keys())
        difference_tariffs = set(request.data[keys[0]]).difference(set(custom_request.keys()))
        if difference_tariffs:
            for tariff in difference_tariffs:
                custom_request[tariff] = request.data[keys[0]][tariff]
        else:
            for tariff in request.data[keys[0]]:
                custom_request[tariff] = request.data[keys[0]][tariff]
        return custom_request