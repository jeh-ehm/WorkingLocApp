import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LocationButton from './LocationButton';
import { Geolocation } from '@capacitor/geolocation';

const App: React.FC = () => {
  const handleLocationButtonClick = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    const latitude = coordinates.coords.latitude;
    const longitude = coordinates.coords.longitude;
    alert(`Latitude: ${latitude}\nLongitude: ${longitude}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Location App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <LocationButton onClick={handleLocationButtonClick} />
      </IonContent>
    </IonPage>
  );
};

export default App;
