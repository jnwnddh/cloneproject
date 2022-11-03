
import React from 'react';
import Nav from '../components/nav';
import Subnav from '../components/Subnav';
import Category from '../components/Category';
import Card from '../components/Card';
import Footer from '../components/Detail/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { __getThunk } from '../redux/modules/postsSlice';
import styled from 'styled-components';
import Loading from '../components/loading/Loading';


const Main = () => {
  const posts = useSelector((state) => state.posting.posting);
  const { isLoading } = useSelector((state) => state.posting.posting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getThunk());
  }, [dispatch]);

  if (isLoading || posts.length <= 0) return <Loading />;

  return (
    <div>
      <Nav />
      <Subnav />
      <Category />

      <Layout>
        {posts?.map((post) => {
          return <Card key={post?.id} post={post} />;
        })}
      </Layout>

      <Footer />
    </div>
  );
};

export default Main;

const Layout = styled.div`
  width: 1100px;
  justify-content: center;

  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  word-break: break-all;
  margin-bottom: 100px;
`;
