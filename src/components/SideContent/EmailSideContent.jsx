import styled from 'styled-components';
import SideContent from "./SideContent";

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #3b82f6;
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;


export default function EmailSideContent() {
    const email = "sfisolindelwa@gmail.com";

    return (
        <SideContent orientation="right">
            <StyledLinkWrapper>
                <a href={`mailto:${email}`}>{email}</a>
            </StyledLinkWrapper>
        </SideContent>
    )
}