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
          <Paragraph>Talk to people you know (family, friends) and try to persuade them of the gravity of the situation. Begin with a small project. You can strike on your own, but it's usually more enjoyable and productive to gather a group of friends. Decide on a strike date and location, and invite members of local climate justice and environmental organizations to join you. The more people there are, the better!</Paragraph>
        </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Getting Start</Title>
            <Paragraph>Register your strike on this webpage here.</Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Amplify the message</Title>
            <Paragraph>Examine the "contact" pages on the websites of local newspapers and television stations. Send them an announcement about the time and location of your strike, as well as the presence of signs and banners that will make for great photos. Consider taking a few photos and sending them to media outlets during the strike. On social media, ask friends who have a large number of followers to share your message. Don't be afraid to ask! This is critical work. Remember to share your accomplishments on social media with the hashtags #FridaysForFuture and #ClimateStrike. We require your assistance! We will make a difference only if we work together.</Paragraph>
          </div>
          <div style={{ marginBottom: '64px' }}>
            <Title>Get Permissions?</Title>
            <Paragraph>The cops have approved many of our strikes. If you're planning a strike, you should see if you require police permission. Frequently, these licenses only permit a silent, sitting protest. If you want to utilize any amplified noises for speeches, such as music or loudspeakers, check your local rules. This may also necessitate obtaining a permit. Fridays For Future is unlikely to be able to help with legal issues, therefore if they arise, we recommend contacting local NGOs who know local lawyers who are familiar with protest circumstances.</Paragraph>
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
          <div>
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
