import styled from "styled-components"

export const FooterContainer = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	padding: 24px;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 17px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 15px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const ContactContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`