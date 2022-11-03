import {
  CancelButton,
  ImgUpload,
  ProductTitle,
  TitleInput,
  ProductPrice,
  PriceInput,
  ProductDesc,
  DescInput,
  ProductUpload,
  Column,
  UploadButton,
  Select,
  Priceand,
  Read,
  ThemeInput,
} from './WritingStyle';

import { useState } from 'react';
import { __addPostThunk } from '../../redux/modules/postsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Writing() {
  //이미지 미리보기부분
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //이미지
  const [imageSrc, setImageSrc] = useState('');

  const [memberPost, setMemberpost] = useState();

  const goToHomepage = () => {
    navigate('/');
  };

  //이것은 비동기함수 메모
  //FileReader 는 File 혹은 Blob 객체를 이용하여, 파일의 내용을 읽을 수 있게 해주는 Web API 이다.
  //Input 태그로 FileList 를 얻어 FileReader.readAsDataURL() 으로 Base64 데이터로 변환하고 이를 atob 로 데이터 변환 가능하다.
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);

        resolve();
      };
    });
  };

  // const formData = new FormData();

  const onSubmitHandler = () => {
    const formData = new FormData();

    formData.append('image1', memberPost.image1);
    formData.append('thumbnail', memberPost.thumbnail);
    formData.append(
      'postDto',
      new Blob(
        [
          JSON.stringify({
            title: memberPost.title,
            category: memberPost.category,
            head1: memberPost.head1,
            content1: memberPost.content1,
            price: memberPost.price,
            endDate: memberPost.endDate,
          }),
        ],
        { type: 'application/json' }
      )
    );

    dispatch(__addPostThunk(formData));
  };
  console.log(memberPost);
  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(memberPost);
        goToHomepage(e);
      }}
    >
      <ProductUpload>
        <Column>
          <Read>글작성하기</Read>
          <ProductPrice>
            썸네일
            <ImgUpload className='preview'>
              <input
                type='file'
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                  // formData.append("file", e.target.files[0]);

                  setMemberpost({
                    ...memberPost,
                    thumbnail: e.target.files[0],
                    // image1: e.target.files[0],
                  });
                }}
              />
              {imageSrc && <img src={imageSrc} alt='preview-img' />}
            </ImgUpload>
          </ProductPrice>
          <ProductTitle>
            <div style={{ position: 'relative', top: '15px', left: '10px' }}>
              {' '}
              제목
            </div>
            <TitleInput
              type='text'
              placeholder=' 제목을 입력하세요 20글자이내.'
              maxLength='20'
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  title: value,
                });
              }}
            />
          </ProductTitle>
          {/* 가격 입력 부분 */}

          <ProductPrice>
            작성자:<div style={{ color: '#FF3D00' }}></div>
            <div>홍길동</div>
          </ProductPrice>
          {/* 설명 입력 부분 */}
          <ProductPrice>
            카테고리<div style={{ color: '#FF3D00' }}></div>
            <Select
              className='select'
              name='education'
              id='edu'
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  categoryCode: value,
                });
              }}
            >
              <option>---선택해주세요---</option>
              <option value='earth'>지구촌</option>
              <option value='friends'>어려운이웃</option>
              <option value='animal'>동물</option>
            </Select>
          </ProductPrice>
          <ProductPrice>
            목표금액<div style={{ color: '#FF3D00' }}></div>
            <PriceInput
              type='text'
              placeholder='숫자만 입력해 주세요.'
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  price: value,
                });
              }}
            />
          </ProductPrice>

          <ProductPrice>
            기부마감일<div style={{ color: '#FF3D00' }}></div>
            <Priceand
              type='text'
              placeholder='마감일을입력해주세요.'
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  endDate: value,
                });
              }}
            />
          </ProductPrice>

          <ProductPrice>
            주제 1<div style={{ color: '#FF3D00' }}></div>
            <ThemeInput
              placeholder='주제를입력해주세요.'
              type='text'
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  head1: value,
                });
              }}
            />
          </ProductPrice>

          <ProductDesc>
            본문1<div style={{ color: '#FF3D00' }}></div>
            <DescInput
              type='text'
              placeholder='내용을입력해주세요.'
              maxlength='250'
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  content1: value,
                });
              }}
            />
          </ProductDesc>

          <ProductPrice>
            이미지
            <input
              type='file'
              onChange={(e) => {
                // formData.append('file', e.target.files[1]);

                setMemberpost({
                  ...memberPost,
                  // imageUrl: e.target.files[1],
                  image1: e.target.files[0],
                });
              }}
            />
          </ProductPrice>

          <div>
            <UploadButton>작성완료</UploadButton>
          </div>
          <div>
            <CancelButton>취소하기</CancelButton>
          </div>
        </Column>
      </ProductUpload>
    </form>
  );
}

export default Writing;

// import axios from "axios";
// import React, { useState } from "react";

// export const Writing = () => {
//   const [files, setFiles] = useState("");

//   const onLoadFile = (e) => {
//     const file = e.target.files;
//     console.log(file);
//     setFiles(file);
//   };

//   const handleClick = (e) => {
//     const formdata = new FormData();
//     formdata.append("uploadImage", files[0]);

//     const config = {
//       Headers: {
//         "content-type": "multipart/form-data",
//       },
//     };

//     axios.post(`http://localhost:3001/memberPosts`, formdata, config);
//   };

//   return (
//     <form>
//       <input type="file" id="image" accept="img/*" onChange={onLoadFile} />
//       <button onClick={handleClick}>추가</button>
//     </form>
//   );
// };

// export default Writing;
