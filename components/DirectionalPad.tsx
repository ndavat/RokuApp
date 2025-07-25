import { View, TouchableOpacity, Text } from 'react-native';
import { commonStyles, buttonStyles, colors } from '../styles/commonStyles';
import Icon from './Icon';

interface DirectionalPadProps {
  onUpPress: () => void;
  onDownPress: () => void;
  onLeftPress: () => void;
  onRightPress: () => void;
  onOkPress: () => void;
}

export default function DirectionalPad({
  onUpPress,
  onDownPress,
  onLeftPress,
  onRightPress,
  onOkPress,
}: DirectionalPadProps) {
  return (
    <View style={commonStyles.directionalPad}>
      {/* Up Button */}
      <TouchableOpacity
        style={[buttonStyles.directionalButton, commonStyles.directionalTop]}
        onPress={onUpPress}
        activeOpacity={0.7}
      >
        <Icon name="chevron-up" size={32} />
      </TouchableOpacity>

      {/* Down Button */}
      <TouchableOpacity
        style={[buttonStyles.directionalButton, commonStyles.directionalBottom]}
        onPress={onDownPress}
        activeOpacity={0.7}
      >
        <Icon name="chevron-down" size={32} />
      </TouchableOpacity>

      {/* Left Button */}
      <TouchableOpacity
        style={[buttonStyles.directionalButton, commonStyles.directionalLeft]}
        onPress={onLeftPress}
        activeOpacity={0.7}
      >
        <Icon name="chevron-back" size={32} />
      </TouchableOpacity>

      {/* Right Button */}
      <TouchableOpacity
        style={[buttonStyles.directionalButton, commonStyles.directionalRight]}
        onPress={onRightPress}
        activeOpacity={0.7}
      >
        <Icon name="chevron-forward" size={32} />
      </TouchableOpacity>

      {/* OK Button */}
      <TouchableOpacity
        style={buttonStyles.okButton}
        onPress={onOkPress}
        activeOpacity={0.7}
      >
        <Text style={{ color: colors.text, fontSize: 18, fontWeight: 'bold' }}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}