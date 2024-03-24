import React, { useContext } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';



import Home from "../pages/Home";
import Beneficios from "../pages/Beneficios";
import AuthContext from "../../src/context/auth";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { darkMode, toggleDarkMode } = useContext(AuthContext);

  const drawerStyle = {
    backgroundColor: darkMode ? 'black' : 'white',
  };

  return (
    <DrawerContentScrollView {...props}style={drawerStyle}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Dark Mode"
        labelStyle= {{ color: darkMode ? '#fff' : '#000' }}
        onPress={toggleDarkMode}
        icon={({ color, size }) => (
          <Feather name={darkMode ? "moon" : "sun"} size={size} color= {'red'} />
        )}
      />
    </DrawerContentScrollView>
  );
};

export default function AppRoutes() {
  const { logout } = useContext(AuthContext);

  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{title:''}} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          drawerIcon: ({ size, color }) => <Feather name="home" size={size} color={'red'}/>,
          drawerLabel: 'Início',
          drawerLabelStyle: {
            color: 'red',
            fontWeight: 'bold',
          },
        }}
      />
      
      <Drawer.Screen 
      name="Benefícios" 
      component={Beneficios}
      options={{
        drawerIcon: ({ size, color }) => <Feather name="gift" size={size} color={'red'}/>,
        drawerLabel: 'Beneficios',
        drawerLabelStyle: {
          color: 'red',
          fontWeight: 'bold',
        },
      }}/>
      
      <Drawer.Screen 
        name="Logout"
        options={{
          drawerIcon: ({ size, color }) => <Feather name="log-out" size={size} color={'red'}/>,
          drawerLabel: 'Logout',
          drawerLabelStyle: {
            color: 'red',
            fontWeight: 'bold',
          },
        }}
      >
      {logout}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
