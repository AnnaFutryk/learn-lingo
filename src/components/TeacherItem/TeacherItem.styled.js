import styled from "styled-components";
import { ReactComponent as DotSvg } from "../../images/green-dot.svg";

export const TeacherCard = styled.li`
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  background-color: #fff;
  border-radius: 24px;
  margin-top: 32px;
`;

export const AvatarWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border: 3px solid #fbe9ba;
  position: relative;
  margin-right: 48px;
`;

export const GreenSvg = styled(DotSvg)`
  position: absolute;
  top: 19px;
  right: 23px;
`;

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
  padding: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 968px;
  flex-direction: column;
  gap: 32px;
`;

export const FirstLineWrapp = styled.div`
  width: 968px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: #8a8a89;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const Name = styled.h2`
  color: #121417;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: flex-start;
  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    margin-right: 16px;
    padding-right: 16px;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const Span = styled.span`
  color: #38cd3e;
`;

export const HeartBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  margin-left: 48px;
`;

export const SecondLineWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpeacksSpan = styled.span`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
`;

export const SecondLineSpan = styled.span`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const ReadMoreBtn = styled.button`
  display: inline-block;
  margin-right: auto;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
`;

export const ExperienceTxt = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const BtnListWrp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;
