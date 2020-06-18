import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({

  container: {
    paddingTop: 55,
  },
  midPicture: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop :60,
    paddingBottom:6
  },
  Icon: {
    width: 50,
    height: 50,
  },
  FontBasic: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  input:{
          width : 200,
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          backgroundColor: 'white',
          color: 'black'
      
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',    
    paddingTop:42,
    color :"#841584"
  },
  circlepic:{
    width: 150, 
    height: 150, 
    borderRadius: 200/3
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  colorbuttonuse: {
    height: 42, 
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000BB',
},
colorbuttonuseunuse: {
    height: 42, 
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1'
},
  Textuse: {
    color:'white'
    },
  Textunuse: {
      color:'#747474'
      },
      Loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
  boxlogin:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor:'black',
    borderWidth:1,
    margin: 13,
    height: 40,
    width : 285,
    borderRadius:2,
  },
  loginbutton:{
    height: 42, 
    width:153, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000BB',
  },
  flexreport:{
    flex:1,
    //paddingTop:33,
},
  beforeopacity:{
    justifyContent: 'center',
    alignItems: 'center',    
    paddingTop:33,
  },
  afteropacity:{
    justifyContent: 'center',
    alignItems: 'center',    
    //paddingTop:33,
    opacity:0.1,
},
mid: {
  justifyContent: 'center',
  alignItems: 'center',
},
separator: {
  height: 0.5,
  backgroundColor: 'rgba(0,0,0,0.4)',
},
loader:{
  marginTop:10,
  alignItems:'center'
}
});