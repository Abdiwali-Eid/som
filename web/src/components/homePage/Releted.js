import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function Releted() {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog(
        filter: { categories: { elemMatch: { title: { eq: "Aqoon guud" } } } }
      ) {
        nodes {
          title
          id
          publishedAt
          author {
            name
            slug {
              current
            }
          }
          coverImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          categories {
            title
            slug {
              current
            }
          }
          slug {
            current
          }
        }
      }
    }
  `);
  // console.log(data);
  const featuredBlogs = data.allSanityBlog.nodes;
  console.log(featuredBlogs);

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Related posts</SectionTitle>
      {/* <ParagraphText className="featuredBlogs__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo
        ad provident consectetur quis eaque doloribus et, ducimus earum iste est
        corporis
      </ParagraphText> */}
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default Releted;
