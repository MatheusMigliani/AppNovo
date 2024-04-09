import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { playCircle } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    
    <IonPage>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          This is the menu content.
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </IonPage>

  );
};

export default Home;
