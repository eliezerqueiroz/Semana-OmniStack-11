import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Details() {

    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, quero ser o heroi da causa ${incident.title}, contribuindo com o valor de:${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL' }).format(incident.value)}`;

    function navigateToIncidents(){
        navigation.navigate('Incidents');
    };

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.name}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }


    return(

        <View style={styles.container}>
            <View style= {styles.header}>
                
                <Image source={logoImg} />
                
                <TouchableOpacity
                style={styles.backToIncidents} 
                onPress={navigateToIncidents}
                >
                    <Feather name={"arrow-left"} size={28} color="#e02041" />
                </TouchableOpacity>
                    
            </View>

            <View  style={styles.incidentDetail}>
                <Text style={styles.incidentProperty}> ONG:</Text>
                <Text style={styles.incidentValue}> {incident.name} de {incident.city} - {incident.uf}</Text>
                
                <Text style={styles.incidentProperty}> CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}> DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}> {incident.description}</Text>
                    
                <Text style={styles.incidentProperty}> VALOR:</Text>
                <Text style={styles.incidentValue}> 
                    {Intl.NumberFormat('pt-BR', {
                    style:'currency', 
                    currency:'BRL' 
                    }).format(incident.value)} 
                </Text>  
            </View>

            <View style={styles.incidentDetail}>

                <Text 
                style={styles.title}> 
                Salve o dia, seja o heroi desse caso! 
                </Text>
                <Text 
                style={styles.description}> 
                Entre em contato.
                </Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={sendWhatsApp}
                    >
                    <Text style={styles.detailsButtonText}> WhatsApp</Text>   
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={sendMail}
                    >
                        <Text style={styles.detailsButtonText}> E-mail</Text>  
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}