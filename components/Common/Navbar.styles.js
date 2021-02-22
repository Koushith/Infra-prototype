import styled from 'styled-components';

export const Navigation = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .nav {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 1000px;
    height: 36.8px;
    margin: 14px auto;
    padding: 0 24px !important;
    justify-content: center;

    .link {
      color: #fff !important;
    }
    .link:hover {
      color: #000 !important;
    }

    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2px;
      Button {
        margin-left: 14px;
      }
    }
  }
`;
