import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder: string;
    onPress?: () => void;
    value: string
    OnChangeText: (text: string) => void
}

const SearchBar = ({ placeholder, onPress, value, OnChangeText }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className="size-5"/>

      <TextInput 
        // onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={OnChangeText}
        placeholderTextColor="#a8b5db"
        className='flex-1 ,l-2 text-white'
      />
    </View>
  )
}

export default SearchBar