import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { Button } from "../components/button/Button";
import { SkillCard } from "../components/skillCard/SkillCard";
import { styles } from "./Home.style";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  const handleNewSkill = () => {
    setMySkills((oldState) => [...oldState, newSkill]);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#121015" />
      <Text style={styles.title}>Hello world!</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      {/* <ScrollView>
        {mySkills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </ScrollView> */}
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  );
}
