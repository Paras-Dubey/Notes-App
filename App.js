import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    setNotes([...notes, newNote]);
    setNewNote('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes App</Text>
      <TextInput
        style={styles.input}
        value={newNote}
        onChangeText={setNewNote}
        placeholder="Add a new note"
      />
      <Button title="Add" onPress={addNote} />
      {notes.map((note, index) => (
        <Text key={index} style={styles.note}>
          {note}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  note: {
    fontSize: 18,
    marginBottom: 10,
  },
});
