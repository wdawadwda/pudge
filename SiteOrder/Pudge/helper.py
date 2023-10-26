
class Helper:

    def collect_full_clubs_json(self, clubs:list):
        clubs_set = list()
        for club in clubs:
            club = dict(club)
            club['club']['id'] = club['id']
            clubs_set.append(club['club'])
        return clubs_set
