import styled from 'styled-components';
import { useRouter } from 'next/router';
import Button from './Button';
import CartButton from './CartButton';

const SubHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: cornflowerBlue;
  padding: 5px 10px;
`;

const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;
  &:first-child {
    margin-left: 20%;
  }
  &:last-child {
    margin-right: 20%;
  }
`;

function SubHeader({ title, goToCart = false }) {
  const router = useRouter();

  return (
    <SubHeaderWrapper>
      <Button onClick={() => router.back()}>{`< Go Back`}</Button>
      <Title>{title}</Title>
      {goToCart && (
        <CartButton onClick={() => router.push('/cart')}>Cart (0)</CartButton>
      )}
    </SubHeaderWrapper>
  );
}

export default SubHeader;
