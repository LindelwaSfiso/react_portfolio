import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: #3b82f6;

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideContent = ({ children, orientation }) => {
    return (
        <StyledSideElement orientation={orientation}>
            <>{children}</>
        </StyledSideElement>
    );
};

SideContent.propTypes = {
    children: PropTypes.node.isRequired,
    //isHome: PropTypes.bool,
    orientation: PropTypes.string,
};

export default SideContent;
