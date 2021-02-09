import React from "react";
import {View, ScrollView,StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Products from "../Products";


function Vitrine(){
	const navigation= useNavigation();

return(
	<ScrollView style={styles.scroll}>
				    <View style={styles.scrollItems}>
				  <Products img={require("../../assets/1.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia</Products>
				    
				    <Products img={require("../../assets/2.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia ogggggggg....</Products>
				    
				    <Products img={require("../../assets/3.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia o.....</Products>
				    
				    <Products img={require("../../assets/4.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia o.....</Products>
				    
				    <Products img={require("../../assets/5.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia o.....</Products>
				    
				    <Products img={require("../../assets/6.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia o.....</Products>
				    
				    <Products img={require("../../assets/7.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia o.....</Products>
				    
				    <Products img={require("../../assets/8.png")} cost="R$70,00" onClick={()=>navigation.navigate("Detail")}>Manta de sofa da leticia o.....</Products>
				    
	
				    </View>
				</ScrollView>
				);
				
};
const styles=StyleSheet.create({
	
	scroll:{
		backgroundColor:"#91e1f5",
	
		
	},
	
	scrollItems:{
		justifyContent:"space-around",
		flexDirection:"row",
		flexWrap:"wrap",
		margin:"2%",
		
		
	},

});
export default Vitrine;