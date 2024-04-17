import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Importa iconos de Ionicons

//screens
import HomeScreens from "./screens/HomeScreens";
import SettingsScreens from "./screens/SettingsScreens";
import StackScreen from "./screens/StackScreens";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'; // Nombre del icono para la pestaña Home
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline'; // Nombre del icono para la pestaña Settings
                    }

                    // Retorna el componente de icono de Ionicons con el nombre de icono y el color
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue', // Color del ícono cuando está seleccionado
                inactiveTintColor: 'gray', // Color del ícono cuando no está seleccionado
                style: {
                    display: 'flex' // Estilo de la barra de pestañas
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreens}/>    
            <Tab.Screen name="Settings" component={SettingsScreens}/>   
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
