import { StyleSheet } from 'react-native';
import Constantes from 'expo-constants';
import Incidents from '.';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constantes.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
    },

    incidentDetail:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize:14,
        color:'#41414d',
        fontWeight: 'bold',

    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 10,
        color:'#737380',
    },

    title: {
        fontSize:20,    
        color:'#13131a',
        fontWeight: 'bold',
        marginBottom: 20,
    },

    description: {
        fontSize:14,
        color: '#737380',
        marginBottom:20,
    },

    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    detailsButton:{
        backgroundColor: '#e02041',
        padding: 16,
        borderRadius: 8,
        justifyContent:'center',
        width:'48%',

    },

    detailsButtonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
});