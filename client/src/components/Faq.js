import React from 'react';
import { Header, Accordion, Icon, Segment } from 'semantic-ui-react';

class Faq extends React.Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted>
        <Header as="h1" style={styles.text}>
          Faq about Get-A-Grip
        </Header>
        <Accordion inverted>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
            How Does The Frame Get Shipped?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
            Generally, the pistol lower is what the ATF considers the actual firearm. As such, it is necessary to follow federal law when shipping. As a licensed firearms dealer (FFL),  you are able to ship your lower directly to us for work and we can send it directly back. (CA and NY excluded - return shipping for these states must be sent to a local FFL).
      When sending pistol frames a non-licensee may not use the united states postal service (USPS). Please use either FedEx or UPS for shipping, although we recommend FedEx as that has been easier for clients in the past.
      Please check with your local FedEx or UPS offices on how they handle such shipments.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
            What is your turn around time?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>Unless otherwise stated, our turn around time is two weeks</p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Can you imitate company "X's" work?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>Short answer, no. At Get a Grip we respect all those in our craft. While certain features such as the undercut, index points, recessed borders, etc may be similar, we do not copy the overall design of another company.</p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Do you do repair work?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>We have done repair work in the past and will continue to do so only if we are confident in our ability to repair any previous stippling done to the frame. Unfortunately there are some frames that are beyond repair. Additionally repair work pricing may differ from our standard pricing model.</p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Do you have any discounts?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>We do offer a 10% discount to all active duty military or LEO contact us for details.</p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Do you only work with Pistols?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>Pistols is all that we currently work on. However, we soon will be able to work with Precision Rifles as well</p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}

const styles = {
  text: {
    color: "white",
  },
}

export default Faq
