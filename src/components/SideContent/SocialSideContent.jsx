import React from 'react';
import styled from 'styled-components';
import SideContent from "./SideContent";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";


const socialMedia = [
    {
        name: 'GitHub',
        url: 'https://github.com/LindelwaSfiso',
        icon: <IconBrandGithub className="group-hover:scale-110" color={"#3b82f6"}/>
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/lindelwa-sifiso-dlamini-63177b139/',
        icon: <IconBrandLinkedin className="group-hover:scale-110" color={"#3b82f6"}/>
    }
]


const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #3b82f6;
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 1px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = () => (
    <SideContent orientation="left">
        <StyledSocialList>
            {socialMedia &&
            socialMedia.map(({url, name, icon}, i) => (
                <li key={i}>
                    <a href={url} aria-label={name} target="_blank" rel="noreferrer" className={"group"}>
                        {icon}
                    </a>
                </li>
            ))}
        </StyledSocialList>
    </SideContent>
);


export default Social;
