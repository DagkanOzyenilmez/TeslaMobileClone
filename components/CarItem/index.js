import React from "react";
import {View, Text, ImageBackground} from 'react-native'; 
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S </Text>
                <Text style={styles.subtitle}>Starting at $69,428</Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton 
                type = "primary" 
                content={"Custom Order"} 
                onPress={() => {
                console.warn("Custom order was pressed.")
                }}
                />

                <StyledButton 
                type = "secondary" 
                content={"Existing inventory"} 
                onPress={() => {
                console.warn("Existing inventory was pressed.")
                }}
                />   
            </View>

        </View>

    )
} 

export default CarItem;
