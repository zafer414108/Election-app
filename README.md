# Imports: The component imports necessary dependencies from React and React Native, including View, ScrollView, and StyleProp.

# Local Imports: It imports styles, a poll item component (RNPollItem), and utility functions from local files.

# Interfaces:

IChoice: Represents the structure of a choice in the poll.

IRNPollProps: Defines the props expected by the RNPoll component


# Component Definition:

The RNPoll component is defined as a function component.

It accepts props such as style, choices, totalVotes, etc.

It uses React hooks (useState) to manage the state.

# Render:
The component renders a View containing a ScrollView.

Inside the ScrollView, it renders a PollContainer (default is View) which wraps the poll items.

Each choice in the choices array is mapped to an RNPollItem component.

The RNPollItem component is passed props such as pollId, text, percentage, etc.

When a choice is pressed (onPress), it updates the state to reflect that the user has voted, increments the vote count for the selected choice (unless disableBuiltInIncreaseVote is set), and calls the onChoicePress callback with the selected choice.

# Export: The RNPoll component is exported as the default export of the module.

<p align="center">
  <img alt="React Native Poll"
        src="assets/Screenshots/react-native-poll.gif" />
</p>

<table>
  <tr>
    <td>
      <b>React Native Poll</b>
    </td>
    <td>
      <b>React Native Poll Choice Selected</b>
    </td>
  </tr>
 <tr>
    <td align="center"> 
      <img alt="React Native Poll" src="assets/Screenshots/react-native-poll.png"  />
    </td>
    <td align="center">
      <img alt="React Native Poll" src="assets/Screenshots/react-native-poll-selected.png"  />
    </td>
   </tr>
</table>

# Installation

Add the dependency:

```bash
npm i react-native-poll
```
