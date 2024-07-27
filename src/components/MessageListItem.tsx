import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <IonCard>
      <img alt="Silhouette of mountains" src={message.img} />
      <IonCardHeader>
       <IonCardTitle>{message.fromName}</IonCardTitle>
      </IonCardHeader>{message.subject}

      <IonCardContent>{message.date}</IonCardContent>
    </IonCard>
    </IonItem>
  );
};

export default MessageListItem;
