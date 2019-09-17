import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterBox>
            <p>Copyright Jeffrey David Whitaker, 2019</p>
        </FooterBox>
    )
}

const FooterBox = styled.footer`
    padding: 20px
    border-top: 1px solid black
`