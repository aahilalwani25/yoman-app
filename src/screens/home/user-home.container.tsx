import React, { useCallback, useMemo } from 'react'
import UserHomeView from './user-home.view'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getAllProducts, searchProducts } from '@/src/modules/products/domain/products.action'
import { outputs } from '@/src/config/outputs'
import { useFocusEffect } from 'expo-router'

function UserHomeContainer() {

  const { data, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(outputs.productOutput)()
  });

  const categories = useMemo(() =>
    data?.map(p => p.category)?.
      filter((value, index, array) =>
        array.indexOf(value) === index), //for finding unique categories (remove duplication)
    [data]);

  const { data: searchedData, mutate: getSeatchedProducts, reset } = useMutation({
    mutationKey: ['search-product'],
    mutationFn: (searchText: string) => searchProducts(outputs.productOutput)(searchText)
  });

  useFocusEffect(useCallback(() => { refetch() }, []));

  return (
    <UserHomeView
      setSearchText={(value) => {
        console.log(value)
        if(value===''){
          reset();
        }else{
          getSeatchedProducts(value as string);
        }
      }}
      searchedData={searchedData}
      categories={categories!}
      productData={data!} />
  )
}

export default UserHomeContainer
