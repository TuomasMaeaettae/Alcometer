import React from 'react'
import { StyleSheet } from 'react-native-web'

export default StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    Header: {
      marginTop: 20,
      marginBottom: 10,
      fontWeight: 'bold',
      color: '#64b5f6' ,
      fontSize: 32,
      alignSelf: 'center',
    },
    Header2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 16,
      },
    Result: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
    },
    Result2: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#66ffa6' ,
        alignSelf: 'center',
        marginBottom: 10,
    },
    Result3: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#dd2c00' ,
        alignSelf: 'center',
        marginBottom: 10,
    },
    Result4: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffeb3b' ,
        alignSelf: 'center',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 10,
        paddigLeft: 30,
        paddingRight: 10,
    },
    label: {
        marginRight: 10,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    }
  });
