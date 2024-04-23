import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 16px;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;

  margin: 12px 0px 20px 0px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 10px 15px;
  border: 1px solid #101010ad;
  border-radius: 4px;
`;
