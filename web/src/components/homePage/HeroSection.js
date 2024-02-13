import React from 'react';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Explore the world with Technology </h1>
            <ParagraphText className="hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
