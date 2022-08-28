import React from 'react';
import { View, FlatList } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const renderCategoryItem = (itemData) => {
  return <CategoryGridTile category={itemData} />;
};

export const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id}>
      {renderCategoryItem}
    </FlatList>
  );
};
