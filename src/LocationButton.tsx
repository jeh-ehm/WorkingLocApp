import React from 'react';
import { IonButton } from '@ionic/react';

type LocationButtonProps = {
  onClick: () => void;
};

const LocationButton: React.FC<LocationButtonProps> = ({ onClick }) => {
  return (
    <IonButton onClick={onClick} expand="full" color="primary">
      Show Location
    </IonButton>
  );
};

export default LocationButton;
