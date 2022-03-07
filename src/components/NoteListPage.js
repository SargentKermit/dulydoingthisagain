import React from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonFab,
    IonFabButton,
    IonIcon
} from "@ionic/react";
import NoteListItem from "./NoteListItem";
import { useHistory } from "react-router-dom";
import useNotes from "../hooks/useNotes";
import { add } from "ionicons/icons"
export default function NoteListPage(props) {
    const history = useHistory();
    
    const {notes, createNote} = useNotes();
    const handleListItemClick = (id) => {
      
        history.push(`/notes/edit/${id}`);
    }

const handelNewNoteClick = () =>{
    const { id } = createNote();
    history.push(`/notes/edit/${id}`);
}

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Duly-Noted</IonTitle>
                </IonToolbar>
            </IonHeader>
                <IonContent>
                    <IonList lines = "full">
                    {
                         notes.map((note) =>{
                             return(
                            <NoteListItem 
                            id = {note.id} 
                            key={note.id}
                            text={note.text}
                            createAt={note.createAt} 
                            onclick={handleListItemClick} />
                            )
                        })
                    }
                    </IonList>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton onClick={handelNewNoteClick}>
                            <IonIcon
                                icon = {add}>
                            </IonIcon>
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>

    );
     
}


