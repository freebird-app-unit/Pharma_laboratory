import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#06A0FD',
    secondary: '#06A0FD',
    error: '#f13a59',
    blackBG:'#343434',
    textColor:'#343434',
    buttonColor:'#06A0FD',
    
  },
  searchStyle:{
    marginLeft:18,
    marginRight:18,
    marginTop:5,
    marginBottom:15,
    
  },
  screenTitle:{
    marginLeft:18,marginRight:18,
    fontSize: 22,
    fontFamily: "Poppins-Medium",
    color:'#1F1F1F'}
}
