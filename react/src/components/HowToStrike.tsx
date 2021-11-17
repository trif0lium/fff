import styled from 'styled-components';

const Title = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 12px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  color: #666;
  font-weight: 400;
  line-height: 1.6;
`;
export const HowToStrike = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{ marginBottom: '64px' }}>
          <Paragraph>
            Talk to people you know (family, friends) and try to get them to understand how serious the situation is.
            Start small. You can strike on your own, but it is often more fun and more productive to get some friends
            together. Decide on a time and place to strike and invite members of local climate justice groups and
            environmental groups. The more people the better!
          </Paragraph>
        </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Getting Start</Title>
            <Paragraph>Register your strike on this webpage here.</Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Amplify the message</Title>
            <Paragraph>
              Check out the “contact” pages on the websites of newspapers and TV stations in your area. Send them an
              announcement of the time and place of your strike, letting them know there will be signs and banners that
              will make great photos. During the strike, consider taking a few photos and sending them to media outlets.
              On social media, ask friends with many followers to boost your message. Don’t be shy! This is important
              work.
              <br />
              Don’t forget to share your achievements on social media by hashtagging #FridaysForFuture and
              #ClimateStrike. We need you! It is together that we will make a difference. 
            </Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Get Permissions?</Title>
            <Paragraph>
              Many of our strikes have been approved by the police. If you’re organizing a strike, you might want to
              check if you need police approval.  Often these approvals only allow for a quiet, sitting protest.  Check
              the laws in your area if you want to use any amplified noises like music or loudspeakers for speeches.
              This may require a permit as well.
              <br />
              Fridays For Future is unlikely to be able to provide legal support should problems occur, so if they do,
              we would advise liaising with NGOs in your area who know local lawyers, well versed in protest
              situations. 
            </Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Choosing Where and When to strike</Title>
            <Paragraph>
              You’re welcome to follow Greta’s lead and strike in front of your closest town hall, city hall or other
              local government building every Friday from 8.00-15.00, including holidays.
              <br />
              Many weekly strikes are shorter and start at noon.
              <br />
              Striking in front of a publicly owned building and in the same place and time each week makes it easier
              for others to join.
            </Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Alternatives to physical strikes</Title>
            <Paragraph>
              Many people are unable to strike in person. They might not want to miss school or work, or it is not safe
              for them to do so, or they may have disabilities that make it difficult or impossible to sit or stand
              outside for long periods. However, there are many alternative possibilities.
              <br />
              Striking indoors with a sign and hashtag on social media (like #FridaysForFuture; #Climatestrikeonline,
              #Digitalstrike) totally counts – so have fun and get creative! Write and perform a climate strike song!
              The possibilities are endless.
              <br />
              You can also sign petitions in Actions and communicate them on social media.
              <br />
              Learning more about the climate crisis is also important, and turning knowledge into lists of things you
              and your family will do.
            </Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Fridays For Future Strike Culture</Title>
            <Paragraph>
              <ul>
                <li>No violence </li>
                <li>No property damage </li>
                <li>No littering </li>
                <li>No profit </li>
                <li>No hate </li>
                <li>Minimize your carbon footprint </li>
                <li>Always refer to science </li>
              </ul>
            </Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Stay Safe</Title>
            <Paragraph>
              Fridays For Future only want you to strike in a way that you feel safe and comfortable with. We are a
              peaceful organization, but we have seen cases of counter protestors, so please take care to prioritize
              your safety. 
            </Paragraph>
          </div>
        </div>
    </div>
  );
};
