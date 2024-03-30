import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Splash: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Splash</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Splash</IonContent>
    </IonPage>
  );
};

export default Splash;
