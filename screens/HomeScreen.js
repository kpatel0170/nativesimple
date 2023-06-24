import React, { useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  const [entityText, setEntityText] = useState('');
  const [entities, setEntities] = useState([]);

  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
      const newEntity = {
        id: entities.length + 1, // Generate a unique ID for each entity
        text: entityText,
      };

      setEntities((prevEntities) => [...prevEntities, newEntity]);
      setEntityText('');
      Keyboard.dismiss();
    }
  };

  const renderEntity = ({ item, index }) => {
    return (
      <View style={styles.entityContainer}>
        <Text style={styles.entityText}>
          {index + 1}. {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new entity"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEntityText(text)}
          value={entityText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {entities.length > 0 && (
        <View style={styles.listContainer}>
          <FlatList
            data={entities}
            renderItem={renderEntity}
            keyExtractor={(item) => item.id.toString()}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}

export default HomeScreen;