import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';

// Responsive spacing constant
export const ROW_SPACING = 24;

// Get responsive spacing based on screen height
export const getResponsiveSpacing = () => {
  const { height } = Dimensions.get('window');
  const isShort = height < 700;
  return isShort ? ROW_SPACING * 0.75 : ROW_SPACING; // 18 for short screens, 24 for normal
};

export const colors = {
  primary: '#6B46C1',      // Purple for main buttons
  secondary: '#8B5CF6',    // Lighter purple for highlights
  accent: '#A78BFA',       // Even lighter purple for accents
  background: '#1E1B3A',   // Dark purple background
  backgroundAlt: '#2D2A4A', // Slightly lighter dark purple
  text: '#FFFFFF',         // White text
  grey: '#4B5563',         // Grey for secondary buttons
  card: '#374151',         // Dark grey for cards
  buttonDark: '#374151',   // Dark grey for secondary buttons
  buttonPurple: '#6B46C1', // Purple for primary buttons
  green: '#10B981',        // Green for power button
};

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.backgroundAlt,
    alignSelf: 'center',
    width: '100%',
  },
  remoteButton: {
    backgroundColor: colors.buttonDark,
    borderRadius: 12,
    padding: 16,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    minWidth: 60,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  purpleButton: {
    backgroundColor: colors.buttonPurple,
    borderRadius: 12,
    padding: 16,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    minWidth: 60,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  directionalButton: {
    backgroundColor: colors.buttonPurple,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  okButton: {
    backgroundColor: colors.buttonPurple,
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -40 }, { translateY: -40 }],
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  powerButton: {
    backgroundColor: colors.green,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.backgroundAlt,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: "white",
  },
  remoteContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  roomText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  topButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  directionalPad: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 30,
    position: 'relative',
  },
  directionalTop: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -40 }],
    width: 80,
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  directionalBottom: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -40 }],
    width: 80,
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  directionalLeft: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: [{ translateY: -40 }],
    width: 60,
    height: 80,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  directionalRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -40 }],
    width: 60,
    height: 80,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  bottomSection: {
    marginTop: 20,
  },
  bottomText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomSubtext: {
    color: colors.grey,
    fontSize: 14,
    textAlign: 'center',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  bottomButton: {
    backgroundColor: colors.buttonDark,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    minWidth: 80,
    alignItems: 'center',
  },
});