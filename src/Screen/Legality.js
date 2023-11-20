import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Legality = ({ navigation }) => {
    const [showGame1Details, setShowGame1Details] = useState(false);
    const [showGame2Details, setShowGame2Details] = useState(false);
    const [showGame3Details, setShowGame3Details] = useState(false);
    return (
        <View style={{ backgroundColor: '#711e21', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Legality</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Image resizeMode='cover' style={{ width: 80, height: 80, }} source={require('../image/Login.png')} />
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', margin: 5 }}>legality</Text>
                    <View style={{ height: 2, width: 150, backgroundColor: 'red' }}></View>
                    <View style={{ width: '80%', margin: 10, alignSelf: 'center' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Techbeliever Technologies Private Limited (“KHILADI ADDA”, “Company”), the operator of this online gaming website, https://www.khiladibaaz.com/ (“Website”, inclusive of the mobile application), strives to endorse responsible gaming, and improve the prevention and avoidance of excessive gaming. This Responsible Gaming Policy describes the Company’s commitments, and your responsibility to promote responsible gaming practices and minimize the negative effects of excessive gaming. Games may involve an element of financial risk and may be addictive. Please play responsibly and at your own risk.

                            If you choose to play on our Website, there are some general guidelines that can help make your playing experience safer, and avoid risk that you may indulge in excessive gaming:

                            . Add money to the Khiladi Adda Wallet only with money that you can afford to spend.

                            . Do not borrow money in order to make purchases on the Website.

                            . Take time outs and breaks regularly.

                            Only participate in games that are commensurate with your competence level and financial capabilities. Do not get tempted to participate in high stakes tables despite winning consistently.

                            Age Exclusion
                            Any underage player who has provided dishonest or inaccurate information regarding their true age may have all winnings forfeited and could face criminal prosecution.

                            This information includes-

                            . Every person signing up for a new account must check a box that indicates that they are at least 18 years of age. This notifies everybody that we don’t accept players under 18.

                            . When a player creates an account with us, we allow them an option to provide their name, address, and birth date for maintaining their user profile on the Website.

                            . We never target underage players with our marketing and advertising. It is neither good business nor consistent with our personal and corporate values to attract underage players.

                            . We self-regulate all Online Games of Skill within the territory of the Republic of India.

                            Company Responsibilities
                            We may notify users in case their accrued spending exceeds a certain limit. Users may be notified when their game sessions are long to take an optional break. And if users’ session exceeds a certain time, the Company may mandate the user to take a non-negotiable break. The user, in this case, may not use the Website.

                            How do you know if you are addicted to gaming?
                            Ask yourself the following questions:

                            . Have you often played longer than you had planned?

                            . Have you often played until your last rupee was gone?

                            . Do thoughts of playing cause you to lose sleep?

                            . Have you used your income or savings to play while letting bills go unpaid?

                            . Have you made repeated, unsuccessful attempts to stop playing?

                            . Have you broken the law or considered breaking the law to finance your gaming?

                            . Have you borrowed money to finance your gaming?

                            Have you felt depressed or suicidal because of your gaming losses?

                            Have you been remorseful after gaming?

                            Have you ever played to get money to meet your financial obligations?

                            If you or someone you know answers yes to any of the above questions, please consider seeking professional help or advice.

                            Disclaimer- Khiladi Adda Will never force any user to add real money into the game and even we give you free deposit and bonus & you can use that to try the game but if you want to add money you can add at your own risk and we are not responsible for your loss.</Text>
                    </View>
                </View>
                <View style={{ height: 3, backgroundColor: 'red' }}></View>
                <View>
                    <Image resizeMode='cover' style={{ width: 150, height: 150, alignSelf: 'center' }} source={require('../image/Login.png')} />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity>

                        <Image resizeMode='cover' style={{ width: 50, height: 50, margin: 5 }} source={require('../image/youtube1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Image resizeMode='cover' style={{ width: 50, height: 50, margin: 5 }} source={require('../image/instagram.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Image resizeMode='cover' style={{ width: 50, height: 50, margin: 5 }} source={require('../image/facebook.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Image resizeMode='cover' style={{ width: 50, height: 50, margin: 5 }} source={require('../image/linkedin.png')} />
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#FFFFFF',
                        width: '90%',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 10
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Games</Text>
                    <TouchableOpacity onPress={() => {
                        setShowGame1Details(!showGame1Details);
                    }}>

                        <Image
                            resizeMode='cover'
                            style={{ width: 20, height: 20,top:5 }}
                            source={require('../image/downarro1.png')}
                        />
                    </TouchableOpacity>
                </View>
                {showGame1Details && (
                    <View style={{ padding: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>LUDO Adda</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Fanbattle</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Battleground India</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Freefire Max</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Callback</Text>


                    </View>
                )}

                <View
                    style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#FFFFFF',
                        width: '90%',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 10
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Other Links</Text>
                    <TouchableOpacity onPress={() => {
                        setShowGame2Details(!showGame2Details);
                    }}>

                        <Image
                            resizeMode='cover'
                            style={{ width: 20, height: 20,top:5 }}
                            source={require('../image/downarro1.png')}
                        />
                    </TouchableOpacity>
                </View>
                {showGame2Details && (
                    <View style={{ padding: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Blogs</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Cancellation Policy</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Pesponsible Gaming</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>About Us</Text>

                    </View>
                )}

                <View
                    style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#FFFFFF',
                        width: '90%',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 10
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Legal</Text>
                    <TouchableOpacity onPress={() => {
                        setShowGame3Details(!showGame3Details);
                    }}>

                        <Image
                            resizeMode='cover'
                            style={{ width: 20, height: 20,top:5 }}
                            source={require('../image/downarro1.png')}
                        />
                    </TouchableOpacity>
                </View>
                {showGame3Details && (
                    <View style={{ padding: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Privacy Policy</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Legality</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Terms And Conditions</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Anti Money Laundering Policies</Text>

                    </View>
                )}
            </ScrollView>

        </View>
    );
}

export default Legality;
