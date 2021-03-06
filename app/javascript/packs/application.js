import React from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import App from '../react/App'
import NonAdminSectionContainer from '../react/kow/containers/NonAdminSectionContainer'
import GGContainer from '../react/gg/containers/GGContainer'
import WmrContainer from '../react/wmr/containers/WmrContainer'

const dropdownStyle = {
    control: (base, state) => ({
        ...base,
        bodShadow: 'none',
        boxShadow: state.isFocused ? 0 : 0,
        cursor: 'text',
        borderRadius: 0,
        border: state.isOpen ? '#000000' : '#000000'
    }),
    option: (styles, { isFocused }) => {
        return {
            ...styles,
            cursor: 'pointer',
            backgroundColor: isFocused ? '#D3D3D3' : '#FFFFFF', '&:active': { backgroundColor: '#D3D3D3' },
            color: isFocused ? '#000000' : '#000000',
            border: isFocused ? '1px solid #000000' : '1px solid #000000',
            lineHeight: 2,
        }
    },
    input: styles => ({
        ...styles,
        color: '#000000',
    }),
    menu: styles => ({
        ...styles,
        marginTop: 0,
        boxShadow: '10px 10px 12px -2px rgba(0,0,0,0.75)',
        borderRadius: 0,
    }),

    singleValue: styles => ({
        ...styles,
        color: '#D3D3D3',
    }),
    indicatorSeparator: base => ({
        ...base,
        display: 'none',
    }),
}

document.addEventListener('DOMContentLoaded', () => {
    let app = document.getElementById('app')

    if (app) {
        if(window.railsEnv && window.railsEnv === 'development'){
            try {
                render(<App dropdownStyle={dropdownStyle} />, app)
            } catch (error) {
                render(<RedBox error={error} />, app)
            }
        }
        else {
            render(<App dropdownStyle={dropdownStyle} />, app)
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    let kow = document.getElementById('kow')

    if (kow) {
        if(window.railsEnv && window.railsEnv === 'development'){
            try {
                render(<NonAdminSectionContainer dropdownStyle={dropdownStyle} />, kow)
            } catch (error) {
                render(<RedBox error={error} />, kow)
            }
        }
        else {
            render(<NonAdminSectionContainer dropdownStyle={dropdownStyle} />, kow)
        }
    }
})

// document.addEventListener('DOMContentLoaded', () => {
//     let gg = document.getElementById('gg')

//     if (gg) {
//         if(window.railsEnv && window.railsEnv === 'development'){
//             try {
//                 render(<GGContainer dropdownStyle={dropdownStyle} />, gg)
//             } catch (error) {
//                 render(<RedBox error={error} />, gg)
//             }
//         }
//         else {
//             render(<GGContainer dropdownStyle={dropdownStyle} />, gg)
//         }
//     }
// })

document.addEventListener('DOMContentLoaded', () => {
    let wmr = document.getElementById('wmr')

    if (wmr) {
        if(window.railsEnv && window.railsEnv === 'development'){
            try {
                render(<WmrContainer dropdownStyle={dropdownStyle} />, wmr)
            } catch (error) {
                render(<RedBox error={error} />, wmr)
            }
        }
        else {
            render(<WmrContainer dropdownStyle={dropdownStyle} />, wmr)
        }
    }
})