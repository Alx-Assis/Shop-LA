import React from "react";
import {StyleSheet,View,Text,Image,TouchableOpacity} from "react-native";
import Vitrine from "../../Components/Vitrine";

const img = require("../../assets/1.jpg");

function Home() {

	return(
			<View  style={styles.container}>
				<Image source={img} style={styles.imageHeader}/>
						<View style={styles.textContainer}>
						<View style={styles.textHeader}>
							<Text style={styles.text}>Artesanatos</Text>
							<Text style={styles.text}> | </Text>
							<Text style={styles.text}>Mantas</Text>
						</View>
							<TouchableOpacity>
                             <Text style={styles.icon}>[|||]</Text>
							</TouchableOpacity>
						</View>
							<View style={styles.line}></View>
							<View>
							<Text style={{fontSize:35,
										color:"#00f",}}>Mantas Crochê</Text>
							</View>
						<Vitrine/>
			</View>
		);
};
const styles = StyleSheet.create({
	container:{
		flex:1,
	},

	textContainer:{
		backgroundColor:"pink",
		justifyContent:"space-between",
		alignItems:"center",
		flexDirection:"row",
		
	},
	
	textHeader:{
		justifyContent:"center",
		alignItems:"center",
		flexDirection:"row",
	},
	
	text :{
		marginTop:"1%",
		fontSize:15,
		color:"#171464",
		margin:"2%",
	

	},
	icon:{
		marginHorizontal:"2%",
		color:"#00f",
		fontSize:15,
	},
	imageHeader:{
		width:"100%",
		height:100,
	},
	line:{
		height:"0.5%",
		backgroundColor:"#6f0c67",
		
	},
	
	
});

export default Home;