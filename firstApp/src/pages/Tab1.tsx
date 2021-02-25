import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to my awesome cool app!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <p>Hi there app user! This is my "first" app I've ever built using Ionic!</p>
        <h4>Feel free to read below and get to know me a bit!</h4>
        <p>My names Garrick! I'm 22 years old and have lived in the LC valley my entire life. I'm hoping to graduate from LCSC with an associates degree
          in Web Development and Design at the end of this semester!
<br/>
<br/>

        Go check out the other pages of the app to find out more about me!
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
