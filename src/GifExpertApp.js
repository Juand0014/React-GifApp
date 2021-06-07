import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const { useState } = require('react')
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2>Pavo Muñequitos</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map(category =>(
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
