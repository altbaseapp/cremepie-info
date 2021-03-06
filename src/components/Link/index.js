import React from 'react'
import { Link as RebassLink } from 'rebass'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

const WrappedLink = ({ external, children, ...rest }) => (
  <RebassLink
    target={external ? '_blank' : null}
    rel={external ? 'noopener noreferrer' : null}
    color="#2f80ed"
    {...rest}
  >
    {children}
  </RebassLink>
)

WrappedLink.propTypes = {
  external: PropTypes.bool,
}

const Link = styled(WrappedLink)`
  color: ${({ color, theme }) => (color ? color : theme.link)};
`

export default Link

export const CustomLink = styled(RouterLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: ${({ color, theme }) => (color ? color : theme.link)};

  &:visited {
    color: ${({ color, theme }) => (color ? lighten(0.1, color) : lighten(0.1, theme.link))};
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    underline: none;
    color: ${({ color, theme }) => (color ? darken(0.1, color) : darken(0.1, theme.link))};
  }
`

export const RouterURL = styled(RouterLink)``

export const BasicLink = styled(RouterLink)`
  // text-decoration: none;
  // color: inherit;
  // &:hover {
  //   cursor: pointer;
  //   text-decoration: none;
  //   underline: none;
  // }
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 48px;
  padding: 0px 16px;
  font-size: 16px;
  background-color: transparent;
  color: rgb(110, 163, 170);
  flex-shrink: 0;
`
