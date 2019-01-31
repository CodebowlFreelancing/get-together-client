import preact from 'preact'
import {Page, Label, TextInput, Datetime, Clickable, Icon} from '../ui'

class CreateEventPage extends preact.Component {
  state = {times: [{startTime: new Date(), endTime: new Date()}]}

  addTime = () => this.setState(({times}) => ({times: [...times, {}]}))

  render(props, {times}) {
    return (
      <Page title="Create event">
        <Label text="Title">
          <TextInput id="title" />
        </Label>
        <Label text="Description">
          <TextInput id="description" />
        </Label>
        <Label text="Location">
          <TextInput id="location" />
        </Label>
        {times.map(() => (
          <div>
            <Label text="Start time">
              <Datetime id="start-time" />
            </Label>
            <Label text="End time">
              <Datetime id="end-time" />
            </Label>
          </div>
        ))}
        <Clickable onClick={this.addTime}>
          <Icon glyph="add" />
        </Clickable>
      </Page>
    )
  }
}

export default CreateEventPage
