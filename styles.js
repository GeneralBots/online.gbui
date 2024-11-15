import { StyleSheet } from 'react-native';

export const colors = {

  primary: '#8A4FFF',
  secondary: '#FFD700',
  background: '#2A1B3D',
  white: '#FFFFFF',
  purple: {
    dark: '#1A0B2E',
    medium: '#431E6E',
    light: '#8A4FFF'
  },
  gold: {
    light: '#FFD700',
    medium: '#DAA520',
    dark: '#B8860B'
  }
};

const glassEffect = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    // Other global container styles
  },
  backgroundArcImage: {
    position: 'absolute',
    width: '355px',
    height: '380px',
    
    // Other global background image styles
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // Other global background image styles
  },
  safeArea: {
    flex: 1,
    // Other global safe area styles
  },
  topNavContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerNavContainer: {
    width: '90%',
    paddingTop: 20,
    marginTop: -30,
    borderRadius: 20,
    height: 85,
    marginLeft: '5%',
    marginRight: '5%',
    paddingRight: '20px',

    paddingLeft: '20px',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    left: 8,
    top:4,
    width: 80,
    height: 20,
  },
  instagramIcon: {
    right: 10,
    width: 16,
    height: 16,
  },

  link:{
    color:'white'
  },

  headerView:{
      display: 'inline'

  },

  // Layout styles
  container: {
    flex: 1,
      
  },
  
  safeArea: {
    flex: 1,
  },
  
  backgroundImage: {
    top:0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backgroundImageForm: {
    
  },
  
  
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 15,
    borderRadius: 15,
    ...glassEffect,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  // Text styles
  title: {
    fontSize: 18,
    flexWrap: 'nowrap',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    color: colors.white,
    letterSpacing: 0.5,
  },
  
  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    letterSpacing: 0.3,
  },
  
  // Input styles
  input: {
    width: '90%',
    height: 38,
    textAlign: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
    marginRight: '5%',
    marginLeft: '5%', 
    fontSize: 16,
    backgroundColor: 'white',
    color: colors.gray,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    marginLeft:16,
    marginRight: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A855F7', // fallback color
    // Add gradient-like effect using background image
    backgroundImage: 'linear-gradient(to right, #7859a9, #deb99b)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.7,
  },
  // Particle effects container
  particleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },

  
})