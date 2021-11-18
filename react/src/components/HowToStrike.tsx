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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{ marginBottom: '64px' }}>
          <Paragraph>
            Talk to people you know (family, friends) and try to persuade them of the gravity of the situation. Begin
            with a small project. You can strike on your own, but it's usually more enjoyable and productive to gather a
            group of friends. Decide on a strike date and location, and invite members of local climate justice and
            environmental organizations to join you. The more people there are, the better!
          </Paragraph>
        </div>
        <div style={{ marginBottom: '64px' }}>
          <Title>Amplify the Message</Title>
          <Paragraph>
            Examine the "contact" pages on the websites of local newspapers and television stations. Send them an
            announcement about the time and location of your strike, as well as the presence of signs and banners that
            will make for great photos. Consider taking a few photos and sending them to media outlets during the
            strike. On social media, ask friends who have a large number of followers to share your message. Don't be
            afraid to ask! This is critical work.
            <br />
            <br />
            Remember to share your accomplishments on social media with the hashtags #FridaysForFuture and
            #ClimateStrike. We require your assistance! We will make a difference only if we work together.
          </Paragraph>
        </div>
        <div style={{ marginBottom: '64px' }}>
          <Title>Get Permissions?</Title>
          <Paragraph>
            The cops have approved many of our strikes. If you're planning a strike, you should see if you require
            police permission. Frequently, these licenses only permit a silent, sitting protest. If you want to utilize
            any amplified noises for speeches, such as music or loudspeakers, check your local rules. This may also
            necessitate obtaining a permit. Fridays For Future is unlikely to be able to help with legal issues,
            therefore if they arise, we recommend contacting local NGOs who know local lawyers who are familiar with
            protest circumstances.
          </Paragraph>
        </div>
        <div style={{ marginBottom: '64px' }}>
          <Title>Choosing Where and When to strike</Title>
          <Paragraph>
            Every Friday from 8 a.m. to 15 a.m., including holidays, you are welcome to strike in front of your nearest
            town hall, city hall, or other local government building, following Greta's lead. Many weekly strikes last
            only a few hours and begin at midday. Striking each week in front of a publicly owned building and at the
            same time and location makes it simpler for others to join.
          </Paragraph>
        </div>
        <div style={{ marginBottom: '64px' }}>
          <Title>Alternatives to Physical Strikes</Title>
          <Paragraph>
            Many people are unable to strike physically. They may not want to miss school or work because it is unsafe
            for them, or they may have disabilities that make it difficult or impossible for them to sit or stand
            outside for long periods of time. However, there are numerous other options.
            <br />
            <br />
            Striking indoors with a banner and a hashtag on social media (such as #FridaysForFuture;
            #Climatestrikeonline, #Digitalstrike) counts as well, so have fun and be creative! Make a song about the
            climate strike and perform it! The options are limitless.
            <br />
            <br />
            You can also sign live petitions and share them on social media. It's also crucial to learn more about the
            climate catastrophe and apply that information into action plans for you and your family.
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
            Fridays For Future simply wants you to strike in a manner that makes you feel safe and secure. Although we
            are a peaceful organization, we have seen instances of counter-protestors, so please prioritize your safety.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
