import styled from "styled-components"
import {
  FaAngleDown,
  FaCartPlus,
  FaRegHeart,
  FaRegUser,
  FaSearch,
} from "react-icons/fa"

const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
`
const Logo = styled.img`
  display: flex;
  margin-right: 70px;
  width: 100px;
  height: 100px;
`

const Collections = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 20px;
`
const CollectionsLogo = styled.div`
  display: flex;
  gap: 4px;
`
const CollectionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Search = styled.div`
  margin-right: 20px;
`
const Header = () => {
  return (
    <>
      <Container>
        <div>
          <Logo src="../src/assets/aadai.png" alt="logo" />
        </div>
        <CollectionContainer>
          <Collections>
            <div>
              <span>HOME</span>
            </div>

            <CollectionsLogo>
              <span>MEN</span>
              <FaAngleDown />
            </CollectionsLogo>

            <CollectionsLogo>
              <span>WOMEN</span>
              <FaAngleDown />
            </CollectionsLogo>

            <CollectionsLogo>
              <span>ABOUT</span>
              <FaAngleDown />
            </CollectionsLogo>
            <div>
              <span>CONTACT</span>
            </div>
          </Collections>
          <Collections>
            <CollectionsLogo>
              <Search>
                <FaSearch />
              </Search>

              <FaRegUser />
              <span>LOGIN</span>
            </CollectionsLogo>
            <CollectionsLogo>
              <FaRegHeart />
              <span>WISHLIST</span>
            </CollectionsLogo>
            <FaCartPlus style={{ fontSize: "30px" }} />
          </Collections>
        </CollectionContainer>
      </Container>
    </>
  )
}
export default Header
