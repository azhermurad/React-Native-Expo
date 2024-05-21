import { View, Text, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const safeArea = useSafeAreaInsets();
    console.log(safeArea);
    return (
        // <View style={{backgroundColor:"red",borderWidth:4,borderColor:"green"}}>
        //   <Text>DrawerContent</Text>
        // </View>
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={require('../assets/images/react-logo.png')}
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View
                style={{ paddingBottom: safeArea.bottom + 10, paddingLeft: 10 }}
            >
                <Text>Logout</Text>
            </View>
        </View>
    );
};

export default CustomDrawerContent;
