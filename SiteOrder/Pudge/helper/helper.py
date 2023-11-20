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

    def compose_mail_text(self, request):

        mail_text = "Запрос на бронь:\n\n"

        for key in request.data:
            if key == 'name':
                mail_text += f"Имя: {request.data['name']}\n"
            elif key == 'phone_number':
                mail_text += f"Телефон: {request.data['phone_number']}\n"
            elif key == 'telegram':
                mail_text += f"Телеграм: {request.data['telegram']}\n"
            elif key == 'club':
                mail_text += f"Клуб: {request.data['club']}\n"
            elif key == 'tariff':
                mail_text += f"Тариф: {request.data['tariff']}\n"
            elif key == 'reservation_time':
                mail_text += f"Время брони: {request.data['reservation_time']}\n"
            elif key == 'quantity_seats':
                mail_text += f"Количество мест: {request.data['quantity_seats']}\n"

        return mail_text

    def move_fields_from_queryset(self, queryset, moving_fields:list):
        for record in range(0, len(queryset)):
            for moving_field in moving_fields:
                queryset[record].pop(moving_field)
        return queryset