import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY } from "@env"
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();


    return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
            style={{
                width: 100, height: 100, resizeMode:"contain"
            }}
            source={{uri: "https://links.papareact.com/gzs"}} />
            <GooglePlacesAutocomplete 
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={500}
            placeholder="Starting Location"
            enablePoweredByContainer={false}
            
            minLength={3}
            onPress={(data, details = null)=> {
                // console.log(data)
                // console.log(details)
                dispatch(setOrigin({
                    destination: details.geometry.location,
                    description: data.description
                }))

                dispatch(setDestination(null))
            }}
            returnKeyType={"search"}
            fetchDetails={true}
            query={{
                key: GOOGLE_API_KEY,
                language: "enGen"
            }}
            styles={{container: {
                flex:0,
                borderWidth: "1px",
                color: 'black',
                borderColor: '#cccc',
                borderRadius: "5px",
            },
            textInput: {
                fontSize: 15,
                color: "black"
            },
            placeholder: {
                color: 'red'
            }
        }}
            />
        <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})