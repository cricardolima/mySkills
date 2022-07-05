import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./skillCard.style";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};
