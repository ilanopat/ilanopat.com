import React from "react"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  img {
    padding: 0 1rem;
    transition: filter 0.3s ease;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`

const links = [
  { href: "https://twitter.com/ilanopat", title: "Twitter" },
  { href: "https://github.com/ilanopat",  title: "Github" },
  {
    href: "https://linkedin.com/in/ilanopat",
    title: "LinkedIn",
  },
]

export const Footer=()=> {
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          {links.map(({ href, icon: Icon, title }) => {
            return (
              <a
                href={href}
                key={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='ion-social-twitter-outline'/>
              </a>
            )
          })}
        </FooterSocialIcons>
      </FooterSocialWrapper>
      © {new Date().getFullYear()} All Rights Reserved. Built with
    </FooterWrapper>
  )
}

export default Footer;