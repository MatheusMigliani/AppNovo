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
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import "./Login.css"; // make sure to define your styles similar to your Flutter app in this CSS file
import { Route, Redirect } from "react-router";
import Register from "./register";

const Login: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        <IonContent className="ion-padding" color={"dark"}>
          <div className="login-logo">
            <img
              src="/public/assets/TA BARATO no name.svg"
              width={113}
              height={139}
              alt="logo"
              className="logoimg"
            />
          </div>
          <div className="ion-text-center">
            <IonText className="ion-text-center">Login</IonText>
          </div>

          <div className="login-form">
            <IonInput
              fill="outline"
              label="Email"
              labelPlacement="floating"
              placeholder="E-mail..."
              type="email"
            />
            <IonInput
              fill="outline"
              label="Senha"
              labelPlacement="floating"
              placeholder="Senha..."
              type="password"
            />
            <IonButton expand="block" routerLink="home">Entrar</IonButton>
            <IonText className="login-register">
              <a href="register">Clique aqui para se Registrar</a>
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
