import styled from 'styled-components'

export const WalletConnectContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0,0.6);
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  font-family: "Black Bison", sans-serif !important;

  .wallet-frame {
    display: flex;
    flex-direction: column;
    max-width: 90vw;

    .top-radius {
      border-radius: 20px 20px 0 0;
    }

    .bottom-radius {
      border-radius: 0 0 20px 20px;
    }

    .one-wallet {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      padding: 40px;

      background: #06071A;

      &:hover {
        background: #1a0618;
      }

      &:active {
        background: #E7100E;
      }

      .wallet-caption {
        margin-bottom: 14px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
          margin-right: 20px;
        }

        .wallet-label {
          font-size: 28px;
        }
      }

      .wallet-description {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;