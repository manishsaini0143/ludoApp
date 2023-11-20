import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const ResponsibleGaming = ({ navigation }) => {
    const [showGame1Details, setShowGame1Details] = useState(false);
    const [showGame2Details, setShowGame2Details] = useState(false);
    const [showGame3Details, setShowGame3Details] = useState(false);
    return (
        <View style={{ backgroundColor: '#711e21', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Responsible Gaming</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Image resizeMode='cover' style={{ width: 80, height: 80, }} source={require('../image/Login.png')} />
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', margin: 5 }}>Responsible Gaming</Text>
                    <View style={{ height: 2, width: 250, backgroundColor: 'red' }}></View>
                    <View style={{ width: '80%', margin: 10, alignSelf: 'center' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Khiladi baaz ia product of Techbeliever Technologies Private Limited operates the portal in India, which offers online fantasy sports, E-sports, casual games and card based games through the web-portal Khiladibaaz.com and mobile application(s) available on playstore and app store as well as on our official website (collectively referred to as the “portal”) (Khiladi baaz is the product of techbeliever technologies private limited referred to herein as “Khiladi baaz” or “we” or “us” “our”).

                            Khiladi baaz is considered a “game of skill.” The game of skills can be defined as a game wherein the skills of the individuals participating in any online e-sports gaming play a dominant role rather than the mere luck of the individuals.

                            Khiladi baaz respects the privacy of its users and is committed to protect it in all respects. With a view to offer an enriching and holistic internet experience to its users,Khiladi baaz offers a vast repository of amusement facilities. kindly take time to read the 'about us' section to know more about Khiladi baaz. Most of the amusement facilities are offered for free but you may need registration to participate in Khiladi Adda online games. The information about the user is collected by Khiladi baaz as (i) information supplied by users and (ii) information automatically tracked during the user's navigation on Khiladi baaz.

                            Before you submit any information to the portal, please read this privacy policy for an explanation of how we will treat your personal information. by using any part of the portal, you consent to the collection, use, disclosure and transfer of your personal information for the purposes outlined in this privacy policy and to the collection, processing and maintenance of this information. If you do not agree to this Privacy Policy, please do not use the portal. Your use of any part of the portal indicates your acceptance of this privacy policy and of the collection, use and disclosure of your personal information in accordance with this Privacy Policy. While you have the option not to provide us with certain information or withdraw consent to collect certain information, kindly note that in such an event you may not be able to take full advantage of the entire scope of features and services offered to you and we reserve the right not to provide you with our services.

                            Purpose and Usage:
                            To utilize certain services on the Portal, users are required to provide specific information during the registration process.

                            This information includes-

                            1. Profile Picture (the image that you upload from your device)
                            2. Name
                            3. Email address
                            4. Date of birth
                            5. State
                            6. Government ids such as aadhaar card or driver's license or voter id

                            Furthermore, in order to grant you access to the features offered through the Portal, verify your identity, and safeguard your account, we may request your permission to capture and record device-related information, operating system details, network specifics, and location data. Additionally, we may seek your consent to gather information regarding the apps installed on your device. This allows us to enhance our services and improve your overall experience on the Portal. In certain cases, you may also be required to provide additional information, such as your Permanent Account Number (PAN).

                            It is important to note that aside from the financial information provided during payment for services on the Portal, Khiladi baaz does not collect any other SPI while delivering the services. Any SPI collected by Khiladi baaz will not be disclosed to any third-party service providers without your explicit consent, except as otherwise stated in this Privacy Policy or as required by law. This condition does not apply to publicly available information, including SPI related to you on the Portal.

                            We collect and utilize personal information (i.e., information that can be used to identify you and is not publicly available) to operate, provide, develop, and enhance the services we offer. This includes keeping you informed about our offerings, as well as the products and services provided by our affiliates and group entities. Additionally, we may share this information with our affiliates and group entities, who may contact you regarding their products and services.

                            During the course of using the services, users may invite other existing users or new users (referred to as "Invited Users") to participate in the services through various social media platforms such as Facebook, WhatsApp, Instagram, etc. The information provided for this purpose may be used to contact and invite the Invited Users to register with Khiladi baaz and participate in the relevant game. The participation of Invited Users in any game is subject to the terms outlined in this Privacy Policy and the Terms and Conditions for using the Portal. By inviting others, you confirm that the Invited Users have consented to and agreed with the disclosure of their information to us, our affiliates, and/or our group entities. Additionally, you may choose to invite your friends by synchronizing your phonebook and directly inviting them from the Portal to play the game and utilize the services.

                            All the required information is specific to the type of game or services the user wishes to participate in or access. It will be utilized solely to provide the requested services and ensure a seamless user experience.

                            Khiladi baaz may share the information provided by you and data concerning your usage of the Services and participation in the Games with its affiliates and group entities. This sharing is intended to enable Khiladi baaz’s affiliates and group entities to contact you regarding the products and services they offer. Additionally, Khiladi baaz may share such information with third-party service providers engaged by Khiladi baaz for purposes such as data analytics, storage, service improvements (including product enhancements), and to enhance your overall experience with Khiladi baaz. Any affiliate, group entity, or third-party service provider with whom the information is shared will be required to maintain the same standards as Khiladi baaz in terms of information security to the best of their abilities.

                            Disclosure/Sharing:
                            By using the Portal, you explicitly agree and grant consent to the collection, use, and storage of your information by Khiladi baaz. Khiladi baaz reserves the right to share, disclose, and transfer the information collected, including personal information, with its affiliates and group entities. In the event that Khiladi baaz sells or transfers all or a portion of its business assets, consumer information may be shared, disclosed, or transferred as part of the transaction. Therefore, you expressly grant consent and permission to Khiladi baaz for the disclosure and transfer of personal information to such third parties.

                            Khiladi baaz may share information and data regarding the usage of the Services and participation in the Game with its commercial partners for the purpose of facilitating user engagement, marketing and promotional activities, and other related purposes. Furthermore, Khiladi baaz reserves the right to disclose or share information with affiliates, group entities, and third parties in limited circumstances. These circumstances include complying with applicable laws, responding to duly authorized legal processes or governmental requests, preventing fraud or imminent harm, and ensuring the security of our network and services.

                            To improve the effectiveness and usability of the portal for our users, we use "cookies", or such similar electronic tools to collect information to assign each visitor a unique random number as a User Identification (User ID) to understand the User's individual interests using the identified computer. Unless the user voluntarily identifies himself/herself (e.g., through registration),Khiladi baaz has no way of knowing who the User is, even if we assign a cookie to the User's computer. The only personal information a cookie can contain is information supplied by the User. a cookie cannot read data off the user's hard drive. Khiladi baaz advertisers may also assign their own cookies to the user's browser (if the User clicks on their ad banners), a process that Khiladi baaz does not control.

                            Use of cookies:
                            Khiladi baaz web servers automatically collect limited information about a user's computer's connection to the internet, including the user's IP address, when the user visits the Portal. (User's IP address is a number that lets computers attached to the Internet know where to send data to the User -- such as the web pages viewed by the User). The User's IP address does not identify the User personally. Khiladi baaz uses this information to deliver its web pages to Users upon request, to tailor its Portal to the interests of its users, to measure traffic within the Portal and let advertisers know the geographic locations from where Khiladi baaz visitors come.

                            Khiladi baaz also includes links to other websites. such websites are governed by their respective privacy policies, which are beyond Khiladi baaz control. Once the User leaves Khiladi baaz servers (the User can tell where he/she is by checking the URL in the location bar on the User's browser), use of any information provided by the User is governed by the privacy policy of the operator of the site which the User is visiting. That policy may differ from Khiladi baaz's own. If the user can't find the privacy policy of any of these sites via a link from the site's homepage, the user may contact the site directly for more information. Khiladi baaz is not responsible for the privacy practices or the content of such websites.

                            Links:
                            Khiladi baaz ia product of Techbeliever Technologies Private Limited operates the portal in India, which offers online fantasy sports, E-sports, casual games and card based games through the web-portal Khiladi baaz.com and mobile application(s) available on playstore and app store as well as on our official website (collectively referred to as the “portal”) (Khiladi baaz is the product of techbeliever technologies private limited referred to herein as “Khiladi baaz” or “we” or “us” “our”).

                            Security procedures:
                            All information gathered on Khiladi baaz is securely stored within Khiladi baaz controlled databases. The database is stored on servers secured behind a firewall; access to such servers being password-protected and strictly limited based on need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the internet. Further, any information you include in a posting to the discussion areas will be available to anyone with internet access. By using the portal, you understand and agree that your information may be used in or transferred to countries other than india.

                            Khiladi baaz also believes that the internet is an ever-evolving medium. We may periodically review from time to time and change our privacy policy to incorporate such future changes as may be considered appropriate, without any notice to you. Our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be. Any changes to our privacy policy will be posted on this page, so you are always aware of what information we collect, how we use it, how we store it and under what circumstances we disclose it.

                            Advertising:
                            When Khiladi baaz presents information to its online advertisers -- to help them understand our audience and confirm the value of advertising on the portal -- it is usually in the form of aggregated statistics on traffic to various pages within our site. When you register with Khiladi baaz, we contact you from time to time about updating your content to provide features which we believe may benefit you. By registering on our portal, you agree to recieve all communications from us including promotional messages relating to tournamnets, contests, legues & bonus through sms, voice call, email & push notofications

                            Disclaimer:
                            There are deceptive emails, websites, blogs, and other online communications circulating on the internet that falsely claim to be associated with or from Khiladi baaz. These deceptive communications may feature our logo, photos, links, content, or other information. Some of them may even contact users directly, asking for login credentials, passwords, or personal information. They may also falsely inform users that they have won a prize or offer a method to engage in illegal or unauthorized activities. We want to clarify that these deceptive communications and their accompanying materials are in no way associated with Khiladi baaz. To ensure your own safety, we strongly advise against responding to such deceptive communications. Please be aware that we will not be held responsible for any loss, damage, or harm that you may experience as a result of relying on or acting upon such deceptive communications.

                            Please note that unless it is necessary for verification purposes as outlined in the Terms and Conditions, we and our employees will not contact you to request your sensitive personal information (SPI).

                            Conditions of use:
                            Khiladi baaz does not warrant that this portal, its servers, or email sent by us or on our behalf are virus free. Khiladi baaz will not be liable for any damages of any kind arising from the use of this portal, including, but not limited to compensatory, direct, indirect, incidental, punitive, special and consequential damages, loss of data, goodwill, business opportunity, income or profit, loss of or damage to property and claims of third parties. In no event will Khiladi baaz be liable for any damages whatsoever in an amount in excess of an amount of inr 100.

                            User Account and Data Deletion:
                            Users have the right to request the deletion of their user accounts and personal information from Khiladi Adda. To initiate this process, users can send a written request via email to info@techbeliever.in

                            We strive to respond to such requests promptly, within 60 days from either receiving the written request or any additional information requested to fulfill the request, whichever is later.

                            In addition to account deletion, users also have the option to request suspension or temporary deactivation of their accounts by contacting info@techbeliever.in

                            With the suspension option, users will be unable to participate in paid contests on their user accounts but will retain access to other parts of the Portal. Alternatively, temporary deactivation prevents login access to the Portal but allows users to reactivate their accounts along with all associated data.

                            If a user chooses to permanently deactivate their account, they will lose access to the Portal and its services, including any user data and personal information linked to their account. However, users may request account restoration within six (6) months from the date of receiving the account deletion notification from Khiladi baaz by contacting info@techbeliever.in

                            When a data deletion request is made, we follow a secure deletion process to ensure that the data is completely removed from our servers or retained only in anonymized form. We take precautions to protect information from accidental or malicious deletion. However, please note that there may be slight delays between the deletion request and the removal of data from both our active systems and backup systems.

                            By visiting this portal, you agree that the laws of the republic of india without regard to its conflict of laws principles, govern this privacy policy and any dispute arising in respect hereof shall be subject to and governed by the dispute resolution process set out in the terms and conditions

                            Contact us:
                            You will promptly notify Khiladi baaz if there are any changes, updates or modifications to your information. further, you may also review, update or modify your information and user preferences by logging into your profile page on the portal.

                            Attn:Khiladi baaz Team

                            Khiladi baaz, Techbeliever Technologies Private Limited,
                            A – 31, 3rd Floor, Sector- 3

                            Noida, Uttar Pradesh 201301 India.</Text>
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
                            style={{ width: 20, height: 20 ,top:5 }}
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

export default ResponsibleGaming;
