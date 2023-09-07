import React, {useEffect} from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,

} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../redux/actions/ProductAction';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  
  return (
    <SafeAreaView>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Container}>
        <Flex
          direction="row"
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          px={5}>
          {product.Products?.products.map(product => {
            return (
              <Pressable key={product.id} style={styles.Pressable}>
                <Box>
                  <Image
                    source={{uri: product.thumbnail}}
                    style={styles.img}
                    alt=""
                  />
                  <Heading style={styles.HeadingPrice}>{product.price}</Heading>
                  <Heading>
                    <Text style={styles.txtName}>{product.title}</Text>
                  </Heading>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      alert('Product Added');
                    }}>
                    <Text>Add To Cart</Text>
                  </TouchableOpacity>
                </Box>
              </Pressable>
            );
          })}
        </Flex>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {backgroundColor: '#EEfAE6'},
  Pressable: {
    marginTop: 30,
    width: '47%',
    backgroundColor: 'white',
    rounded: 'md',
    shadow: 2,
    paddingTop: 0.3,
    my: 3,
    paddingBottom: 2,
    overflow: 'hidden',
  },
  img: {height: 80, width: 'auto', resizeMode: 'contain'},
  HeadingPrice: {
    fontSize: 15,
  },
  txtName: {
    fontSize: 15,
    marginTop: 1,
    // isTruncated,
    width: 'full',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#39B54A',
    fontSize: '10',
    width: 'auto',
    padding: 5,
    borderRadius: 10,
  },
});

export default ProductsScreen;
