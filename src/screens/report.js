import React from 'react'
import { View,ImageBackground,AsyncStorage,FlatList,ActivityIndicator,Text, VirtualizedList} from 'react-native'
import {get} from '../helper/request';
import {styles} from '../assets/css.js';
import { Historyframe,InfoHisframe } from '../components/';
import { SearchBar } from 'react-native-elements';

export default class report extends React.Component {
    constructor(prop){
        super(prop)
        this.state ={
          modalVisible: null,
          access_Token : '',
          Datahistory : [],
          Dataprofile :[],
          page:1,
          isLoading:false,
          searchTxt:null,
          temp:[],
          refreshing: false,
        }
        this.onLoad();
      }

      onLoad = async () => {
        const access_Token = await AsyncStorage.getItem('access_Token')
        this.setState({access_Token : access_Token})
        get('/user/profile')
                 .then(res => {
                   const Dataprofile = res.data;
                   this.setState({ Dataprofile: Dataprofile });
                 })
        get('/user/history/1')
        .then(res => { 
            this.setState({
              isLoading:false,
              Datahistory : [...this.state.Datahistory , ...res.data],
              temp: [...this.state.temp , ...res.data],
             })
        });     
      }

      getData=()=>{
        if(this.state.page>1){
          this.setState({isLoading:true})
          get('/user/history/'+this.state.page)
          .then(res => { 
          setTimeout(() => {
              this.setState({
                Datahistory : [...this.state.Datahistory , ...res.data],
                temp: [...this.state.temp , ...res.data],
                isLoading:false
               })
            }, 1000);
          });
        }else{
          get('/user/history/1')
          .then(res => { 
            this.setState({
              Datahistory : res.data,
              temp: res.data,
              isLoading:false,refreshing:false
              })
          });
        }
      }

      setopacityParent = (modalVisible) => {
        this.setState({modalVisible: modalVisible});
      }

      renderrow=({item,index})=>{
        return(
          <Historyframe
          date ={item.created_at}
          checkin={item.checkin_at}
          checkout={item.checkout_at}
          status={item.status}
          note={item.note}
          opacityParent={this.setopacityParent}/>
        )
      }

      handleLoadMore = () =>{
        if(!this.state.isLoading){
        this.setState({page : this.state.page+1})
        this.getData()
        }
      }
      renderFooter=()=>{
        return(
          this.state.isLoading ?
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#0000ff"/>
            </View> 
          : null
        )
      }

      handleRefesh = () => {
        this.setState({
          page:1,
          refreshing:true,
          checkfirstpage:false, 
        },
          ()=>{this.getData()})
      }

      renderHeader =() =>{
        return (
              <View style={styles.mid}>
                <View style={{width:320,paddingBottom:15}}>
                  <SearchBar 
                      inputStyle={{paddingLeft:15,fontSize:15,color:'black'}}
                      containerStyle={{backgroundColor:'white',borderColor:'black',borderWidth:1}} 
                      cancelIconColor="white"
                      backgroundColor="#EAF2F9"
                      placeholder="Search here"
                      placeholderTextColor='#747474'
                      editable={true}
                      value={this.state.searchTxt}
                      onChangeText={text => this.SearchFilterFunction(text)}
                      onClear={text => this.SearchFilterFunction('')}/>
                </View>
                </View>
        )
      }

      SearchFilterFunction(text) {
          const newData = this.state.temp.filter(function(item) {
          const itemSet =  item.created_at.substring(0,3)+' '+item.created_at.substring(11,13) +"/"+item.created_at.substring(8,10)+"/"+item.created_at.substring(3,7)
          const itemData = itemSet ? itemSet.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          Datahistory: newData,
          searchTxt:text,
        });
      }

      render() {
          return (
          <ImageBackground source={require('../assets/bg_history.png')} style={styles.bg}>
                        <View style={{...this.state.modalVisible
                            ? styles.afteropacity
                            : styles.flexreport}}>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}} >
                  {this.state.Dataprofile.map((item)=>(
                  <InfoHisframe key={item.username} firstname={item.firstname+''} lastname={item.lastname} username={item.username} image={item.image}/> ))}
            </View>
            <View style={{flex: 3,justifyContent: 'center'}} >
                    <FlatList
                    ListHeaderComponent={this.renderHeader}
                    data={this.state.Datahistory}
                    extraData={this.state}
                    renderItem={this.renderrow}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.4} 
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefesh}/> 
            </View>
            </View>    
          </ImageBackground> 

          )
        }
    }
