import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 350px;
  background-color: #e2dedb;
  padding: 15px 0px 0px 25px;
  a {
    text-decoration: none;
    color: var(--custom-black);
    line-height: 25px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
