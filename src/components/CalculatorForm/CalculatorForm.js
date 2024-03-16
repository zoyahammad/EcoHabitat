import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { FormContainer } from './CalculatorFormStyles';
import { calculatorAppliances } from '../../constants/constants';

const CalculatorForm = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [hours, setHours] = useState({});
    const [totalConsumption, setTotalConsumption] = useState(null);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedItems((prevSelectedItems) =>
            checked ? [...prevSelectedItems, name] : prevSelectedItems.filter((item) => item !== name)
        );
    };

    const handleHourChange = (event) => {
        const { name, value } = event.target;
        setHours((prevHours) => ({
            ...prevHours,
            [name]: value !== '' ? parseInt(value) : ''
        }));
    };

    const handleSubmit = () => {
        let total = 0;

        // Iterate over the selected items and their hours
        Object.entries(hours).forEach(([appliance, hour]) => {
            // Check if the appliance is selected and the hour is a valid number
            if (selectedItems.includes(appliance) && !isNaN(hour)) {
                // Multiply the hour with the max value of the appliance and add it to the total
                total += hour * calculatorAppliances[appliance].max;
            }
        });
        
        setTotalConsumption(total);
    };

    return (
        <FormContainer>
            {Object.entries(calculatorAppliances).map(([appliance, values], index) => (
                <div key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedItems.includes(appliance)}
                                onChange={handleCheckboxChange}
                                name={appliance}
                            />
                        }
                        label={
                            <Typography variant="body1" style={{ fontSize: 20, color: 'black' }}>
                                {appliance}
                            </Typography>
                        }
                    />
                    {selectedItems.includes(appliance) && (
                        <TextField
                            type="number"
                            label="Hours"
                            name={appliance}
                            value={hours[appliance] || ''}
                            onChange={handleHourChange}
                        />
                    )}
                </div>
            ))}
            <br />
            <Button variant="contained" color="#FFFFFF" style={{ textColor: 'black', width: '200px', height: '60px', borderRadius: '15px', fontSize: 13 }} onClick={handleSubmit}>
                Submit
            </Button>
            {totalConsumption !== null && (
                <Typography variant="body1" style={{ fontSize: 20, color: 'black', marginTop: '20px' }}>
                    Total Approximate Consumption: {totalConsumption} Watts
                </Typography>
            )}
        </FormContainer>
    );
};

export default CalculatorForm;