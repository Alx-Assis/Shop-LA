import React from 'react';
import {View, TouchableOpacity,Image,Text,StyleSheet} from "react-native";



function Products(props){
	     function filterDesc(desc) {
	     	if(desc.length<22){
	     		return desc;
	     	}
	     	return `${desc.substring(0,18)}...`;
	     
	     }
	
				 return(
				 	 
					<TouchableOpacity style={styles.productContainer} onPress={props.onClick}> 
						<View style={styles.products}>
		
							<Image style={{width:140,height:140}}
									source={props.img}/>
							
							<Text style={styles.descr}>{filterDesc(props.children)}</Text>
							<View opacity={0.4}>
							<Text style={styles.cost}>{props.cost}</Text>
							</View>
						</View>
					</TouchableOpacity>
			
				    );
};

const styles=StyleSheet.create({
	productContainer:{
		justifyContent:"center",
		alignItems:"center",
		paddingVertical:"2%",
		
	},
	products:{
		alignItems:"center",
		justifyContent:"center",
		padding:"2%",
		backgroundColor:"#ededed",
	},
	descr:{
		color:"#00f",
		fontSize:15,
	},
	cost:{
		color:"#f00",
		fontSize:15,
	},
})
				    
export default Products;