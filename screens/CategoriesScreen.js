import React from 'react';
import { FlatList } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const renderCategoryItem = (itemData) => {
  return <CategoryGridTile title={itemData.title} color={itemData.color} />;
};

export const CategoriesScreen = () => {
  return (
    <FlatList
      renderItem={renderCategoryItem}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
    />
  );
};
