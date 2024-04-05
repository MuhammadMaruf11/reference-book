import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text,  View } from 'react-native';
import imgBg from '../public/img/bg.jpg'
import { Link } from 'expo-router';

const HomePage = () => {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={imgBg} style={styles.bg}>
                    <Text style={styles.heading}>Reference Book</Text>
                    <Text style={{ color: '#fff' }}>by</Text>
                    <Text style={styles.paragraph}>Rahat Iqbal</Text>
                    <Image
                        source={require('../public/img/book.png')}
                        style={styles.image}
                    />
                    <Link href='/TableOfContent' style={styles.buttonStyles}>Let's Start</Link>
                </ImageBackground>
                <StatusBar backgroundColor='#8000ff' barStyle='light-content' />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: ' rgba(255,60,182,1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 0,
        color: '#fff',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 50,
        marginBottom: 100,
    },
    buttonStyles: {
        backgroundColor: '#007bff',
        color:'#fff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5,
    },
});


export default HomePage;
