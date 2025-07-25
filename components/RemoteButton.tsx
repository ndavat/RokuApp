import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, buttonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface RemoteButtonProps {
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  iconName?: keyof typeof import('@expo/vector-icons').Ionicons.glyphMap;
  text?: string;
  iconSize?: number;
  textStyle?: TextStyle;
}

export default function RemoteButton({ 
  onPress, 
  style, 
  iconName, 
  text, 
  iconSize = 24,
  textStyle 
}: RemoteButtonProps) {
  return (
    <TouchableOpacity 
      style={[buttonStyles.remoteButton, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {iconName && <Icon name={iconName} size={iconSize} />}
      {text && <Text style={[styles.buttonText, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
});