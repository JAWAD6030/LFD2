import React from "react";
import { View, SectionList } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";


const MyTable = () => {

//    const tableData = [
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//       ["coca, 1€", "coca, 1€", "coca, 1€"],
//    ];

   const tableData2 = [
    {product: "coca", price: 1, image: 'blabla.jpg'},
    {product: "coca", price: 1, image: 'blabla.jpg'},
    {product: "coca", price: 1},
    {product: "coca", price: 1},
    {product: "coca", price: 1},
    {product: "coca", price: 1},
    {product: "coca", price: 1},
    {product: "coca", price: 1},
    {product: "coca", price: 1},
   ]

   const tableData3 = [
    {title: 'Boissons', datas: ['coca', 'fanta']},
    {title: 'Boissons', datas: ['coca', 'fanta']},
   ]


   return (
  
       
      
    
      <View style={{ flex: 1, padding: 20, paddingTop: 15, backgroundColor: "#44c2a3" }}>
         {/* <Table borderStyle={{ borderWidth: 0, borderColor: "gray" }}>
            <Row
              
               style={{ height: 40, backgroundColor: "#44c2a3" }}
               textStyle={{ textAlign: "center", fontWeight: "bold" }}
            />
            <Rows data={tableData2} style={{ height: 80 }} textStyle={{ textAlign: "center" }} />
         </Table> */}
         <SectionList
                sections={tableData3}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View>
                        <Text>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text>{title}</Text>
      )}
    />
      </View>
   
   );
};
export default MyTable;
