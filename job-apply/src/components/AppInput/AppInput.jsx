import { TextField } from '@mui/material'
import React from 'react'

function AppInput({ label, onChange, key }) {
    const onInputChange = (e) => {
        onChange(key, e.target.value)
    }

    return (
        <div className='mx-2'>
            <TextField id='outlined-basic' label={label} variant='outlined' onChange={onInputChange} />
        </div>
    )
}

export default AppInput