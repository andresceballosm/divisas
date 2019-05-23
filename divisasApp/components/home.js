import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Card } from './card';
import Spin from './spin';

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      load:true,
      euro:0,
      dolar:0,
      real:0,
    }
  }

  componentDidMount(){
    //Refresca la consulta cada 5 segundos 
    setInterval(() => {
      getDivisa('euro').then((response => {
        this.setState({euro:response.precio})
      }))
      getDivisa('dolar').then((response => {
        this.setState({dolar:response.precio})
      }))
      getDivisa('real').then((response => {
        this.setState({real:response.precio})
      }))
      this.setState({load:false})
    }, 5000);
  }

  uploadDivisas = () => {
    this.setState({load:true})
    //Se agrega el intervalo de tiempo para apreciar la animación del boton de refresh
    //ya que la respuesta del servicio es muy rapida y no se logra percibir
    setInterval(() => {
      getDivisa('euro').then((response => {
        this.setState({euro:response.precio})
      }))
      getDivisa('dolar').then((response => {
        this.setState({dolar:response.precio})
      }))
      getDivisa('real').then((response => {
        this.setState({real:response.precio})
      }))
      this.setState({load:false})
    }, 2000);
  }
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}> Divisas </Text>
            </View>
            <Card divisa='dolar' value={this.state.dolar} style={styles.card}  />
            <Card divisa='euro'  value={this.state.euro}  style={styles.card}  />
            <Card divisa='real'  value={this.state.real}  style={styles.card}  />
            { this.state.load ?
              <Spin style={styles.icon}/>
            :
              <TouchableOpacity style={styles.card} onPress={this.uploadDivisas}>
                <Image 
                  style={styles.icon} 
                  source={require('../assets/icons/spin.png')}
                />  
              </TouchableOpacity>
            }
        </View>
    )
  }
}

async function getDivisa(divisa){
  try{
    //Inserte la IP de su maquina
    let Ip= 'http://192.168.1.5';
    let url = Ip + ':7000/cotizacion/' + divisa;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle:{
    flex:1,  
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:20,
  },
  card:{
    flex:1
  },
  icon:{
    marginTop:20,
  }
});
