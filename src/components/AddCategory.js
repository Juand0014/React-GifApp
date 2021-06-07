const { useState } = require('react');
const PropTypes = require('prop-types')


export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (InputValue.trim().length > 2){
            setCategories(cats => [InputValue,...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ InputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}