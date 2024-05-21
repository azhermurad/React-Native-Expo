import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomDrawerContent from '../components/CustomDrawerContent';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    drawerItemStyle: {
                        // margin:0,
                        // borderRadius:0
                        
                    },
                    drawerLabelStyle: {
                        // backgroundColor: 'red',
                        marginLeft: -20,
                    },
                  
                    drawerStyle: {
                        width: 240,
                        backgroundColor:"orange"

                    },
                }}
                drawerContent={CustomDrawerContent}
            >
                <Drawer.Screen
                    name='index' // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <FontAwesome size={28} name='home' color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='animal'
                    options={{
                        drawerLabel: 'Animal',
                        title: 'Animal',
                        drawerIcon: ({ color }) => (
                            <FontAwesome
                                size={28}
                                name='amazon'
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='about'
                    options={{
                        drawerLabel: 'About',
                        title: 'About',
                        drawerIcon: ({ color }) => (
                            <FontAwesome
                                size={28}
                                name='google'
                                color={color}
                            />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
