import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {CustomLoader, Label} from '../../component';
import {Color, Constants, ThemeUtils} from '../../utils';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';

interface Merchant {
  MerchantID: string;
  MerchantCode: string;
  StoreName: string;
  MerchantLogo: string;
  SubCategoryID: string;
  SubCategoryName: string;
  PhoneNo: string;
  Email: string;
  Lat: string;
  Lng: string;
  Website: string;
  AboutStore: string;
  Zone: string;
  UnitNumber: string;
  TowerNumber: string;
  RefundDays: string;
  RefundPolicy: string;
  ParticipationLevel: string;
  MerchantTypeID: string;
  IsSponsored: string;
  MerchantOpeningHours: string;
  PromotionalImage: string;
  DetailImage: string;
}
interface SubCategory {
  label: string;
  value: string;
}
const Home = () => {
  const [storeList, setStoreList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState<SubCategory[]>([]);
  const [value, setValue] = useState('1');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  /* API Call To get Data From API*/
  useEffect(() => {
    fetchStoreListAPI();
  }, []);

  const fetchStoreListAPI = () => {
    axios
      .get(Constants.BASE_URL)
      .then(function (response) {
        setLoading(false);
        if (response.data && response.data.PremiumMerchant) {
          setStoreList(response.data?.PremiumMerchant);
          const subCategoryList = response.data.PremiumMerchant.map(
            merchant => ({
              value: merchant.SubCategoryID,
              label: merchant.SubCategoryName,
            }),
          );
          subCategoryList.unshift({
            value: '1',
            label: 'All',
          });
          setSubCategoryList(subCategoryList);
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  // Sub component of render store list item
  const renderItem = ({item}: {item: Merchant}) => {
    const {StoreName, PromotionalImage, UnitNumber, TowerNumber} = item;
    return (
      <View style={styles.marchantCont}>
        <FastImage
          source={{
            uri: item.PromotionalImage,
            priority: FastImage.priority.high,
          }}
          resizeMode="cover"
          style={styles.marchantImageStyle}></FastImage>
        <View style={styles.textContainer}>
          <Label
            bold
            singleLine
            color={Color.TEXT_PRIMARY}
            small
            style={styles.titleStyle}>
            {StoreName}
          </Label>
          <Label
            bold
            numberOfLines={1}
            color={Color.TEXT_PRIMARY}
            xsmall
            mt={ThemeUtils.relativeRealHeight(0.5)}>
            {`${TowerNumber}, ${UnitNumber}`}
          </Label>
        </View>
      </View>
    );
  };

  // Sub component of render category list item
  const renderCategoryItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <CustomLoader loading={loading} />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={subCategoryList}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
            setSelectedCategory(item.label);
          }}
          renderItem={renderCategoryItem}
        />
        <Label
          bold
          singleLine
          color={Color.TEXT_PRIMARY}
          mt={ThemeUtils.relativeRealHeight(3)}
          style={styles.categoryTitleStyle}>
          {selectedCategory}
        </Label>
      </View>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={styles.giftCardListStyle}
        data={storeList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
};
export default Home;
