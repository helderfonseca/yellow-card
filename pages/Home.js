import { View, StyleSheet, Text, Image, Box, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import logo from '../src/assets/card.png';
import logoPA from '../src/assets/logo-pa.png';

const Home = () => {
    return(
        <View style={styles.container}>
            <Image source={logo} style={{width: 130, height: 130, resizeMode: 'contain'}}/>

            <Text style={styles.title}>Escolha um cartão</Text>
            
            <View style={styles.card}>
                {/*<Text style={{fontSize: 18, fontWeight: '600'}}>Nenhum cartão disponível</Text>
                <Text style={{width: '55%', textAlign: 'center'}}>Por favor, adicione um novo cartão!</Text>*/}
                <Image source={logoPA} style={{width: 40, height: 40}}/>

                <Text style={{fontSize: 20, fontWeight: '700', paddingTop: 30}}>Aldina Santos</Text>
                <Text style={{color: '#1e1e1e', fontSize: 13}}>Telesales Executive</Text>

                <View style={{flex: 1, flexDirection: 'row', paddingTop: 30}}>
                    <Icon name="map" color='#1e1e1e' style={{paddingRight: 10}}/>
                    <Text>
                        Av. Cidade de Lisboa {"\n"} 
                        Prédio Avenida, 3º piso
                    </Text>
                </View>

                <View style={{flexDirection: 'row', paddingTop: 30}}>
                    <Icon name="phone" size={15} color='#1e1e1e' style={{paddingRight: 10}}/>
                    <Text>
                        +238 260 33 10 / 800 10 00
                    </Text>
                </View>

                <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <Icon name="mobile" size={20} color='#1e1e1e' style={{paddingRight: 10}}/>
                    <Text>
                        +238 596 83 70
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', paddingTop: 10}}>
                    <Icon name="envelope" size={13} color='#1e1e1e' style={{paddingRight: 10}}/>
                    <Text>
                       asantos@paginasamarelas.cv
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={{backgroundColor: '#1e1e1e', padding: 20, borderRadius: 8, marginTop: -30}}
            >
                <Icon name='send' size={20} color='#fef200' />
            </TouchableOpacity>

            <TouchableOpacity
                style={{backgroundColor: '#1e1e1e', position: 'absolute', top: 665, zIndex: 10, left: 40, padding: 20, borderRadius: 8, marginTop: -30}}
            >
                <Icon name='plus' size={13} color='#fef200' />
            </TouchableOpacity>
            
            <TouchableOpacity
                style={{backgroundColor: '#fef200', padding: 10, borderRadius: 8, marginTop: 30, width: '80%',}}
            >
                <Text style={{color: '#1e1e1e', textAlign: 'center', fontWeight: '700'}}>Adicionar cartão</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 20,
    },
    card: {
        //alignItems: 'center',
        //justifyContent: 'center',
        width: '80%',
        backgroundColor: '#fef200',
        minHeight: 400,
        height: 'auto',
        padding: 30,
        borderRadius: 8,
    }
});


export default Home;