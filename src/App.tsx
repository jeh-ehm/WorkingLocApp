import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LocationButton from './LocationButton';

const App: React.FC = () => {
  const handleLocationButtonClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert(`Latitude: ${latitude}\nLongitude: ${longitude}`);
      },
      (error) => {
        alert(`Error retrieving location: ${error.message}`);
      }
    );
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
