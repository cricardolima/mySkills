import React, { useEffect, useState } from "react";
import { Text, View, TextInput, FlatList } from "react-native";
import { Button } from "../components/button/Button";
import { SkillCard } from "../components/skillCard/SkillCard";
import { styles } from "./Home.style";

interface SKillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SKillData[]>([]);
  const [greeting, setGreeting] = useState("");

  const handleNewSkill = () => {
    if (newSkill === "") {
      return;
    }
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills((oldState) => [...oldState, data]);
  };

  const handleDeleteSkill = (id: string) => {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Ricardo</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleNewSkill} title="Add" />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      {/* <ScrollView>
        {mySkills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </ScrollView> */}
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} onPress={() => handleDeleteSkill(item.id)}/>}
      />
    </View>
  );
}
