import './App.css';
import logo from './assets/logo.png';
import Greenv from './assets/v2.mp4';
import { Video, ImgContainer, Headline, BlackOverlay, HeadlineContainer, Logo, CTAButton, Content, Founders, Story, List, Item } from './app.styles';
import SingleTeamMember from './components/single-team-member/single-team-member.component';
import Sri from './assets/sri.jpg';
import Nora from './assets/nora.jpg';
import TagManager from 'react-gtm-module';
require('typeface-montserrat');
require('typeface-lato');

const tagManagerArgs = {
  gtmId: 'GTM-TZNQSGC',
};

TagManager.initialize(tagManagerArgs);
function App() {
  return (
    <div className='App'>
      <ImgContainer>
        <BlackOverlay></BlackOverlay>
        <Video alt='Green Yoga Team' loop autoPlay muted playsInline>
          <source src={Greenv} type='video/mp4'></source>
        </Video>
        <HeadlineContainer>
          <Headline>We have been working on something big behind the scenes </Headline>

          <Headline>It’s finally time to reveal.</Headline>
          <CTAButton onClick={() => (window.location.href = 'https://greenyoga.co/')} large inverted>
            Check it out{' '}
          </CTAButton>
        </HeadlineContainer>
      </ImgContainer>
      <Logo src={logo}></Logo>
      <Content>
        <Founders>
          <SingleTeamMember picture={Sri} name='Sri'></SingleTeamMember>
          <SingleTeamMember picture={Nora} name='Nora'></SingleTeamMember>
        </Founders>
        <Story>
          <strong>Sri</strong> and <strong>Nora</strong> our founders, started Green Yoga in 2018 in a small and tiny room with a limited digital set
          up that we’ve been still using until now. But since then we have been growing into a big yoga community with amazing teachers, 2 studios,
          more than 20 classes daily, and such a loving and kind community with all of you.
          <br />
          With our growth came also the need to professionalise our digital set up and appearance, and we are so happy to have yoga teachers and
          friends on board, who were able to enable our website relaunch to even make it easier for you{' '}
        </Story>

        <List>
          <Item>Getting all the information you need</Item>
          <Item>Booking classes with us, </Item>
          <Item>Introducing all of our kind teachers</Item>
          <Item>Showing more of what Green Yoga is all about</Item>
        </List>
        <CTAButton onClick={() => (window.location.href = 'https://greenyoga.co/')} large inverted>
          Check it out
        </CTAButton>
      </Content>
    </div>
  );
}

export default App;
