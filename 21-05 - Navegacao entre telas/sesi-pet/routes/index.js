import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonicIcon from 'react-native-vector-icons/Ionicons';

// import das telas
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Atendimentos from '../pages/atendimentos';
import Profissionais from '../pages/profissionais';

// import dos navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function abasInferiores() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: true,
                tabBarActiveTintColor: '#c55151',
                tabBarInactiveTintColor: '#707070',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#e0e0e0',
                },
                tabBarIcon: ({color, size, focused}) => {
                    let nomeIcone;

                    if(route.name === 'Atendimentos') {
                        nomeIcone = focused ? 'calendar' : 'calendar-outline';
                    }
                    if(route.name === 'Cadastro') {
                        nomeIcone = focused ? 'person' : 'person-outline';
                    }
                    if(route.name === 'Profissionais') {
                        nomeIcone = focused ? 'people' : 'people-outline';
                    }
                    if(route.name === 'Login') {
                        nomeIcone = focused ? 'person' : 'person-outline';
                    }
                    return <IonicIcon name={nomeIcone} size={size} color={color} />
                },
                headerStyle: {
                    backgroundColor: '#c55151',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })}
        >
            <Tab.Screen name="Atendimentos" component={Atendimentos} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Profissionais" component={Profissionais} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    );
}