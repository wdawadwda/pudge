import { Linking } from 'react-native';
import { Button } from '../Button';

export const OpenMapsLink = ({ mapUrl }: { mapUrl: string }) => {
  if(!mapUrl || typeof mapUrl !== 'string'){
    return(
      <Button disabled={true}>
      Карта не найдена
    </Button>
    )
  }
  return (
    <Button onPress={() => Linking.openURL(mapUrl).catch((err) => console.error('An error occurred', err))}>
      Карта клубов
    </Button>
  );
};
