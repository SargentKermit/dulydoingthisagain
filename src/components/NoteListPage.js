import React, {useState} from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList
} from "@ionic/react";
import NoteListItem from "./NoteListItem";
import NoteEditPage from "./NoteEditPage";
const initialNotes = [
    {
        id: "1",
        createAt: new Date(),
        text: "This is Note 1"
    },
    {
        id: "2",
        createAt: new Date(),
        text: "React _is_ **fun**!"
    },
    {
        id: "3",
        createAt: new Date(),
        text: "This is Note 3"
    }
]
export default function NoteListPage(props) {
    const [selectedNoteId, setSelectedNoteId] = useState(null)
    const [notes, SetNotes] = useState(initialNotes);

    const handleOnCancel = () => {
      
        setSelectedNoteId(null);
    };
    const handleOnDelete = (pinkPearlEraser) => {
        setSelectedNoteId(null);
        SetNotes(notes.filter((e)=>(e.id !== pinkPearlEraser)))
        
    };

    const handleOnSave = (newNoteText) => {
        const updatedNotes = notes.map((note) => {
         if(note.id === selectedNoteId) {
                return{
                 ...note, 
                 text: newNoteText
            };
        }
        return note;
    });
    setSelectedNoteId(null);
    SetNotes(updatedNotes);


};

    if (selectedNoteId){
        const selectedNote = notes.find((note) => note.id === selectedNoteId)
        return(
            <NoteEditPage onSave={handleOnSave} onCancel={handleOnCancel} onDelete={handleOnDelete} text={selectedNote.text} ids={selectedNote.id}/>
        )
    }


    const handleListItemClick = (id) => {
        setSelectedNoteId(id);
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
                </IonContent>
            </IonPage>

    );
     
}


