import { Text, TouchableOpacity } from "react-native";
import { styles } from "./skillCard.style";

export const SkillCard = ({skill}) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};
