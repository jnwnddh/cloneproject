import React from 'react';

import styled from 'styled-components';

const Contents = ({ posts }) => {
  return (
    <Layout>
      <ContentBox>
        <Title>{posts.head1}</Title>
        <Content>{posts.content1}</Content>
        <Image src={posts.image1} />
      </ContentBox>
    </Layout>
  );
};

export default Contents;

const ContentBox = styled.div`
  width: 700px;
`;

const Layout = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const Title = styled.div`
  display: flex;

  left: 0px;

  font-family: 'KakaoBigBold';
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  opacity: 0.8;
  position: relative;
  right: 225px;
`;
const Content = styled.div`
  font-family: 'KakaoBigRegular';
  text-align: left;

  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  opacity: 0.7;
`;
const Image = styled.img`
  width: 700px;
`;
