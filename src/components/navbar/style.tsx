import styled from 'styled-components';

export const StyledNavbar = styled.div`
position: fixed;
left: 0; /* Added left: 0 to ensure it starts from the left */
z-index: 30;
width: 100%;
padding: 8px;
background-color: #FF6D08; /* Added a background color if needed */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Added a box shadow for a subtle effect */
    /* Styles for smaller screens 
    @media (max-width: 768px) {
    */
  }
`;

export const FlexBetweenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding-left: 24px;
  height: auto;
  /*styles for the logo */
`;

export const SearchIcon = styled.div`
  width: 24px;
  padding-right: 24px;
  /*styles for the search icon */
`;