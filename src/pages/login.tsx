import React from "react";
import {
  IonApp,
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonIcon,
  IonFooter,
  IonText,
} from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import "./Login.css"; // make sure to define your styles similar to your Flutter app in this CSS file

const Login: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        <IonContent className="ion-padding" color={"primary"}>
          <div className="login-logo">
            <img
              src="/public/assets/TA BARATO no name.svg"
              width={113}
              height={139}
              alt="logo"
            />
          </div>
          <IonText>Login</IonText>
          <div className="login-form">
            <IonInput placeholder="E-mail..."labelPlacement="floating" type="email"  />
            <IonInput placeholder="Senha..." type="password" />
            <IonButton expand="block">Entrar</IonButton>
            <IonText className="login-register">
              <a href="#">Clique aqui para se Registrar</a>
            </IonText>
            <div className="login-or">ou continue com o</div>
            <IonButton expand="block" fill="clear">
              <IonIcon slot="start" icon={logoGoogle} />
              Google
            </IonButton>
            <IonText className="ion-text-center ion-padding">
              Ao clicar em continuar, você aceita nossos Termos de serviço e
              Privacidade.
            </IonText>
          </div>
        </IonContent>
        <IonFooter className="ion-text-center ion-padding">@M1gliani</IonFooter>
      </IonPage>
    </IonApp>
  );
};

export default Login;
