import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { commonStyles, buttonStyles, colors, ROW_SPACING } from '../styles/commonStyles';
import RemoteButton from '../components/RemoteButton';
import DirectionalPad from '../components/DirectionalPad';
import Icon from '../components/Icon';

export default function RokuRemote() {
  const [selectedRoom, setSelectedRoom] = useState('Bedroom');
  const insets = useSafeAreaInsets();

  // Responsive spacing based on screen height
  const { height } = Dimensions.get('window');
  const isShort = height < 700;
  const rowSpacing = isShort ? ROW_SPACING * 0.75 : ROW_SPACING; // 18 for short screens, 24 for normal

  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} button pressed`);
  };

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView 
          style={commonStyles.remoteContainer} 
          showsVerticalScrollIndicator={false}
          scrollIndicatorInsets={insets}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: Math.max(20, insets.top),
            paddingBottom: Math.max(20, insets.bottom + 10)
          }}
        >
        {/* Header */}
        <View style={[commonStyles.header, { marginBottom: rowSpacing * 1.25 }]}>
          <TouchableOpacity onPress={() => handleButtonPress('Close')}>
            <Icon name="close" size={28} />
          </TouchableOpacity>
          
          <TouchableOpacity style={commonStyles.roomSelector}>
            <Text style={commonStyles.roomText}>{selectedRoom}</Text>
            <Icon name="chevron-down" size={16} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={buttonStyles.powerButton}
            onPress={() => handleButtonPress('Power')}
          >
            <Icon name="power" size={24} />
          </TouchableOpacity>
        </View>

        {/* Top Row - Search, Voice, Keyboard, Settings */}
        <View style={[commonStyles.topButtonsRow, { marginBottom: rowSpacing * 0.83 }]}>
          <RemoteButton
            iconName="search"
            onPress={() => handleButtonPress('Search')}
            iconSize={28}
          />
          <RemoteButton
            iconName="mic"
            onPress={() => handleButtonPress('Voice')}
            iconSize={28}
          />
          <RemoteButton
            iconName="keypad"
            onPress={() => handleButtonPress('Keyboard')}
            iconSize={28}
          />
          <RemoteButton
            iconName="settings"
            onPress={() => handleButtonPress('Settings')}
            iconSize={28}
          />
        </View>

        {/* Second Row - Back, Guide, Home */}
        <View style={[commonStyles.buttonRow, { marginBottom: rowSpacing * 0.67 }]}>
          <RemoteButton
            iconName="arrow-back"
            onPress={() => handleButtonPress('Back')}
            style={{ flex: 1, marginRight: 8 }}
            iconSize={28}
          />
          <RemoteButton
            text="GUIDE"
            onPress={() => handleButtonPress('Guide')}
            style={{ flex: 1, marginHorizontal: 8 }}
            textStyle={{ fontSize: 16, fontWeight: 'bold' }}
          />
          <RemoteButton
            iconName="home"
            onPress={() => handleButtonPress('Home')}
            style={{ flex: 1, marginLeft: 8 }}
            iconSize={28}
          />
        </View>

        {/* Directional Pad with OK Button */}
        <DirectionalPad
          onUpPress={() => handleButtonPress('Up')}
          onDownPress={() => handleButtonPress('Down')}
          onLeftPress={() => handleButtonPress('Left')}
          onRightPress={() => handleButtonPress('Right')}
          onOkPress={() => handleButtonPress('OK')}
        />

        {/* Third Row - Replay, Options, Headphones */}
        <View style={[commonStyles.buttonRow, { marginBottom: rowSpacing * 0.67 }]}>
          <RemoteButton
            iconName="refresh"
            onPress={() => handleButtonPress('Replay')}
            style={{ flex: 1, marginRight: 8 }}
            iconSize={28}
          />
          <RemoteButton
            iconName="ellipsis-horizontal"
            onPress={() => handleButtonPress('Options')}
            style={{ flex: 1, marginHorizontal: 8 }}
            iconSize={28}
          />
          <RemoteButton
            iconName="headset"
            onPress={() => handleButtonPress('Headphones')}
            style={{ flex: 1, marginLeft: 8 }}
            iconSize={28}
          />
        </View>

        {/* Fourth Row - Rewind, Play/Pause, Fast Forward */}
        <View style={[commonStyles.buttonRow, { marginBottom: rowSpacing * 0.67 }]}>
          <RemoteButton
            iconName="play-skip-back"
            onPress={() => handleButtonPress('Rewind')}
            style={{ flex: 1, marginRight: 8 }}
            iconSize={28}
          />
          <RemoteButton
            iconName="play"
            onPress={() => handleButtonPress('Play/Pause')}
            style={{ flex: 1, marginHorizontal: 8 }}
            iconSize={28}
          />
          <RemoteButton
            iconName="play-skip-forward"
            onPress={() => handleButtonPress('Fast Forward')}
            style={{ flex: 1, marginLeft: 8 }}
            iconSize={28}
          />
        </View>

        {/* Fifth Row - Volume Controls */}
        <View style={[commonStyles.buttonRow, { marginBottom: rowSpacing * 0.67 }]}>
          <RemoteButton
            iconName="volume-mute"
            onPress={() => handleButtonPress('Mute')}
            style={{ flex: 1, marginRight: 8 }}
            iconSize={28}
          />
          <RemoteButton
            iconName="volume-low"
            onPress={() => handleButtonPress('Volume Down')}
            style={{ flex: 1, marginHorizontal: 8 }}
            iconSize={28}
          />
          <RemoteButton
            iconName="volume-high"
            onPress={() => handleButtonPress('Volume Up')}
            style={{ flex: 1, marginLeft: 8 }}
            iconSize={28}
          />
        </View>

        {/* Bottom Section */}
        <View style={commonStyles.bottomSection}>
          <Text style={[commonStyles.bottomText, { marginBottom: rowSpacing * 0.33 }]}>My Roku</Text>
          <Text style={[commonStyles.bottomSubtext, { marginBottom: rowSpacing * 0.83 }]}>Continue Watching, Save List, Apps & more</Text>
          
          <View style={commonStyles.bottomButtons}>
            <TouchableOpacity 
              style={commonStyles.bottomButton}
              onPress={() => handleButtonPress('Continue Watching')}
            >
              <Icon name="list" size={20} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={commonStyles.bottomButton}
              onPress={() => handleButtonPress('Save List')}
            >
              <Icon name="bookmark" size={20} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={commonStyles.bottomButton}
              onPress={() => handleButtonPress('Apps')}
            >
              <Icon name="apps" size={20} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[commonStyles.bottomButton, { backgroundColor: colors.text }]}
              onPress={() => handleButtonPress('Add More')}
            >
              <Icon name="add" size={20} style={{ color: colors.background }} />
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}