import React from "react";
import guestbookst from "../css/GuestBook.module.css";
import GuestForm from "../components/GuestForm";
import GuestView from "../components/GuestView";

const GuestBook = () => {
  return (
    <div className={guestbookst.body}>
      <div className={guestbookst.left}>
        <GuestForm />
      </div>
      <div className={guestbookst.right1}>
        <GuestView
          name="PORO"
          content="반가워요, 코너 파운더 PORO입니다! 열심히만 하기에는 세상에 재밌는 게 너무 많으니까, 함께여서 즐거운 코너를 만드는 게 저희의 목표입니다. 해보고 싶었던 공부나 취미, 프로젝트까지. 어떤 것이든 코너에서 함께해요! 작은 성취가 모여 큰 사람을 만들어요. 저희가 작은 성취들을 이루게 도와드릴게요, 열정만 들고 오세요. 코너 2기에서 기다리고 있을게요! 🥥"
        />
        <GuestView
          name="무지"
          content="안녕하세요 1기 운영진 김수정입니다. 코너에서 진취적이고 열정적인 운영진과 팀원들을 만나 함께 성장할 수 있는 기회를 갖게 되어 큰 행운이었습니다. 학교에서 배우는 커리큘럼과는 별개로 하고 싶은 공부와 프로젝트가 있다면, 코너를 적극 추천합니다!!  무럭무럭 성장하는 코코넛이 되는 그 날까지 응원하겠습니다. 화이팅!!🥥"
        />
        <GuestView
          name="OJO"
          content="백엔드 기초부터 프로젝트 경험까지 코너에서 할 수 있다?! 거기에 인생에 진심인 사람들이 가득해서 저절로 갓생살 수 있다?!! 모두 코너에서 1년 동안 일어난 일입니다. Come on!"
        />
        <GuestView
          name="알밤"
          content="코딩은 너로부터! 모든 코딩은 당신으로부터 시작될 수 있습니다! 걱정이 된다고요? 못할 것 같다고요? 그런 생각은 금물! 누구든지 할 수 있다고요~ 참신하고 멋진 개발을 원한다면 코너로부터 실현해보세요!"
        />
      </div>
      <div className={guestbookst.right2}>
        <GuestView
          name="Kim PeeP"
          content="안녕하세요, 코너 2기 부회장, 1기 대외팀장 KimPeeP입니다! 코너에 많은 관심을 가져 주셔서 감사합니다. 더 좋은 모습과 더 멋진 개발 포트폴리오로 여러분을 찾아뵙겠습니다. 코너에 앞으로도 많은 관심 부탁드려요!"
        />

        <GuestView name="태영" content="태영언니말을한다 강.태.영" />
        <GuestView
          name="YUZ"
          content="여러분의 마음 한 구석을 장악할 이름값하는 동아리 Corner입니다! 개발 코너, 스터디 코너, 소소모임 코너까지! 코코넛들을 위한 각종 코너를 차지해보세요!"
        />
        <GuestView
          name="코코넛"
          content="코코넛은 코너 소속원들의 애칭이랍니다! 코너 2기 소속원이 된다면 당신도 코코넛이 될 수 있는 특별한 찬 -- 스 💖 컴퓨터공학전공의 유일무이 개발 소모임 코너에서 여러분과 함께하고 싶어요! 2기에 함께해 주실 거죠?"
        />
      </div>
    </div>
  );
};

export default GuestBook;
