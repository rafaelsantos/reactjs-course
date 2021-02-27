import React from 'react'

export default (props) => {
    return (
        <div>
            { 
                React.Children.map(props.children, (el) => {
                    return React.cloneElement(el, { ...props }) 
                })
            }
        </div>
    )
}