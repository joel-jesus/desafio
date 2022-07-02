import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background: var(--custom-red);

  @media only screen and (max-width: 600px) {
    position: absolute;
    margin-top: 140px;
    width: 50%;
    height: 200px;
    display: ${props => (props.selected ? 'block' : 'none')};
  }
`

export const Nav = styled.nav`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  padding: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 80%;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 10px;
    }

    li {
      list-style: none;
      a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
      }
    }
  }
`
