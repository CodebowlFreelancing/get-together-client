import {Component, h} from 'preact'
import {Page, Label, TextInput, Textarea, DatetimeRange, Clickable, Icon, Checkbox} from '../ui'

class CreateEventPage extends Component {
  state = {times: [{startTime: new Date(), endTime: new Date()}]}

  addTime = () => this.setState(({times}) => ({times: [...times, {}]}))

  render(props, {times}) {
    return (
      <Page title="Create event">
        <Label text="Title">
          <TextInput id="title" />
        </Label>
        <Label text="Location">
          <TextInput id="location" />
        </Label>
        <Label text="Description">
          <Textarea id="description" />
        </Label>
        <Checkbox label="RSVP" id="rsvp" />
        {times.map(() => (
          <DatetimeRange />
        ))}
        <Clickable onClick={this.addTime}>
          <Icon glyph="add" />
        </Clickable>
      </Page>
    )
  }
}

export default CreateEventPage
