import React from 'react'
import {TextInput, View} from 'react-native'
import {Icon} from'react-native-elements';
class InputText extends React.Component {
    render() {
        return (

            <View style={{flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderColor:'black',borderWidth:1,
                margin: 13,
                height: 40,
                width : 279,
                borderRadius:2 }}>
            <Icon style={{ padding: 10,}} name='lock' type='font-awesome' size={20} color="#000"/>
              <TextInput
                placeholder="Password"
                onChangeText={this.props.onChangeText}
                underlineColorAndroid="transparent" />
            </View>
            )
    }
}