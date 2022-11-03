import styled from 'styled-components';

function Modal({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalBackGround>
      <button onClick={closeModal}>X</button>
      <p>모달창입니다.</p>
    </ModalBackGround>
  );
}
export default Modal;

const ModalBackGround = styled.div`
  /* 모달창 크기 */
  width: 300px;
  height: 200px;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;
