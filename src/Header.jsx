import React, {memo} from 'react'

const Header = ({content}) => {
    console.log("i'm also rendering plz save me")
    return (
        <h1>
            {content}
        </h1>
    )
}

export default memo(Header)
