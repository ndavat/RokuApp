import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { commonStyles, buttonStyles, colors } from '../styles/commonStyles';
import RemoteButton from '../components/RemoteButton';
import DirectionalPad from '../components/DirectionalPad';
import Icon from '../components/Icon';

export default function RokuRemote() {
  const [selectedRoom, setSelectedRoom] = useState('Bedroom');

  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} button pressed`);
  };

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <ScrollView style={commonStyles.remoteContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={commonStyles.header}>
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
        <View style={commonStyles.topButtonsRow}>
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
        <View style={commonStyles.buttonRow}>
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
        <View style={commonStyles.buttonRow}>
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
        <View style={commonStyles.buttonRow}>
          <RemoteButton
            iconName="play-skip-back"
            onPress={() => handleButtonPress('Rewind')}
            style={{ flex: 1, marginRight: 8 }}
            iconSize={28}
          />
          <RemoteButton
            iconName="play-pause"
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
        <View style={commonStyles.buttonRow}>
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
          <Text style={commonStyles.bottomText}>My Roku</Text>
          <Text style={commonStyles.bottomSubtext}>Continue Watching, Save List, Apps & more</Text>
          
          <View style={commonStyles.bottomButtons}>
            <TouchableOpacity style={commonStyles.bottomButton}>
              <Icon name="list" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={commonStyles.bottomButton}>
              <Icon name="bookmark" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={commonStyles.bottomButton}>
              <Icon name="apps" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyles.bottomButton, { backgroundColor: colors.text }]}>
              <Icon name="add" size={20} style={{ color: colors.background }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}