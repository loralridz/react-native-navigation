import React from 'react'

export const ProductDetail = ({ navigation, route }) => {
    const { name } = route.params
    console.log(name)
    return (
        <div>
            {name}
        </div>
    )
}
