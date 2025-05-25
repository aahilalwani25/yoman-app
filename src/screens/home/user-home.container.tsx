import React, { useCallback, useMemo } from 'react'
import UserHomeView from './user-home.view'
import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '@/src/modules/products/domain/products.action'
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
    [data])

  useFocusEffect(useCallback(() => { refetch() }, []));

  return (
    <UserHomeView categories={categories!} productData={data!} />
  )
}

export default UserHomeContainer
