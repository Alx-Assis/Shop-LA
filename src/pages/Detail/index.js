import React from "react";
import {View,Text,ScrollView,Image,StyleSheet} from "react-native";

import Dot from "../../Components/Dot";

function Detail({navigation}) {
	
	navigation.setOptions({
		headerTitle:"Manta preta",
		
	});
	
	return(
			<ScrollView style ={styles.container}>
			 <Image 
			 source={require("../../assets/d1.png")}
			 style={styles.image}
			 resizeMode="cover"
			 />
				<View>
					<View>
						<Text style={[styles.title,{fontSize:24}]}>R$70,00</Text>
					</View>
					<View opacity={0.4}>
						<Text style={[styles.title,{fontSize:30}]}>Manta Preta</Text>
					</View>
				</View>
				<View>
				   <Dot/>
				</View>
			</ScrollView>
		);
};
const styles=StyleSheet.create({
	container:{
		flex:1,
		width:"100%",
		backgroundColor:"#52cbe9",
		paddingHorizontal:"2%",
		
	},
	image:{
		width:"100%"
	},
	title:{
		paddingHorizontal:"2%"
	},
})
export default Detail;