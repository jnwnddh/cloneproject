import React, { useState } from 'react';
import { Banner } from '../components/Detail/Banner';
import Nav from '../components/nav';
import Contents from '../components/Detail/Contents';
import Donation from '../components/Detail/Donation';
import AddComment from '../components/Detail/AddComment';
import CommentList from '../components/Detail/CommentList';
import Footer from '../components/Detail/Footer';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getPost } from '../redux/modules/postsSlice';
import FooterNav from '../components/Detail/FooterNav';
import Modal from '../components/Detail/Modal';

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posting.posting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch, id]);

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Nav />
      <Banner posts={posts} />
      <Contents posts={posts} />
      <Donation posts={posts} />
      <AddComment />
      <CommentList posts={posts} />
      <FooterNav posts={posts} showModal={showModal} />
      {/* <Modal>{modalOpen && <Modal setModalOpen={setModalOpen} />}</Modal> */}
      <Footer />
    </div>
  );
};

export default Detail;
