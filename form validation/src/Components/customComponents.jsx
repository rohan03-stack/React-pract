import React from "react";
import PropTypes from "prop-types";
import './custom.css'



export const CustomForm = ({ fields, onSubmit, buttonText }) => {
    const [formData, setFormData] = React.useState(() => {
       
        return fields.reduce((accumulator, field) => {
            accumulator[field.name] = "";
            return accumulator;
        }, {});
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            {
                fields?.map((el) => (
                    <div key={el.name}>
                        <label htmlFor={el.name}>
                            {el.label}
                        </label>
                        <input type={el.type}
                            name={el.name}
                            id={el.id}
                            placeholder={el.placeholder}
                            value={formData[el.name]}
                            onChange={(e) => handleChange(e)}
                            required={el.required}
                        />
                    </div>
                ))
            }
            <button type="submit">{buttonText}</button>
        </form>
    );
};



CustomForm.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string.isRequired,
        required: PropTypes.bool,
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}
