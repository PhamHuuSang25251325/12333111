import React from 'react'

import LoadingView from '../base_components/LoadingView';

const withSpinner = Comp => ({isLoading,children,...props})=>{
    if(isLoading) return <LoadingView />
    return (
        <Comp {...props}>
            {children}
        </Comp>
    )

}

export default withSpinner;