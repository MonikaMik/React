import styled from "styled-components";

const StyledBandCard = styled.div`
  box-sizing: border-box;
  padding: 1rem 1rem 2.5rem;
  display: inline-block;
  background-color: var(--card-color);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  width: 300px;
  > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  > .bandInfo {
    color: white;
    > :first-child {
      font-size: 1.4rem;
      margin: 0.4rem 0;
    }
    > .mainInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > p {
        margin: 0.5rem 0;
        border: 1px solid white;
        padding: 2px 3px;
      }
    }
    .members {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
`;

const StyledIcon = styled.i`
  position: absolute;
  background-color: #1a1a1a95;
  font-size: 3rem;
  top: -1.5rem;
  right: 1rem;
  border-radius: 50%;
  padding: 0.4rem;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const BandCard = ({ band, changeStatus, deleteBand, editBand }) => {
  return (
    <>
      <StyledBandCard>
        <img src={band.picture} alt={band.name} />
        <StyledIcon
          className={
            band.liked
              ? "fa-regular fa-face-grin-hearts yellowIcon"
              : "far fa-frown greyIcon"
          }
          onClick={() => changeStatus(band.id)}
        ></StyledIcon>
        <div className="bandInfo">
          <p className="yellow">{band.name.toUpperCase()}</p>
          <div className="mainInfo">
            <p>{band.genre.toUpperCase()}</p>
            <span className="grey">{band.formed}</span>
          </div>
          <hr />
          <div className="members">
            {band.members.map((member, i) => (
              <span key={i}>
                {member.toLowerCase()}
                {i !== band.members.length - 1 && " -"}
              </span>
            ))}
          </div>
        </div>
        <div className="iconContainer">
          <i className="far fa-edit" onClick={() => editBand(band)}></i>
          <i
            className="fa-regular fa-trash-can"
            onClick={() => deleteBand(band.id)}
          ></i>
        </div>
      </StyledBandCard>
    </>
  );
};

export default BandCard;
