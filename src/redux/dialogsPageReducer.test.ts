import {v1} from "uuid";
import {addNewMessageCreator, dialogsPageReducer, DialogsPageType, updateNewMessageCreator} from "./dialogsPageReducer";

let initialState: DialogsPageType

beforeEach(() => {
  initialState = {
    dialogs: [
      {
        id: '1', name: 'Dimych', newMessageText: ''
      },
      {
        id: '2', name: 'Max', newMessageText: ''
      },
      {
        id: '3', name: 'Sveta', newMessageText: ''
      },
    ],
    messages: {
      '1': [
        {id: v1(), message: 'Hi', isMine: true},
        {id: v1(), message: 'Hey hey', isMine: false},
        {id: v1(), message: 'Hey hey', isMine: false},
        {id: v1(), message: 'Hey hey', isMine: false},
        {id: v1(), message: 'How is your', isMine: true},
        {id: v1(), message: 'Yo', isMine: false},
        {id: v1(), message: 'Yo yo yo', isMine: false}
      ],
      '2': [
        {id: v1(), message: 'Yo', isMine: true},
        {id: v1(), message: 'Whats up', isMine: false}
      ],
      '3': [
        {id: v1(), message: 'Hello', isMine: false}
      ]
    }
  }
})

test('update new message text', () => {

  const newState = dialogsPageReducer(initialState, updateNewMessageCreator('hello', '2'))

  expect(newState.dialogs[0].newMessageText).toBe('')
  expect(newState.dialogs[1].newMessageText).toBe('hello')
  expect(newState.dialogs.length).toBe(3)
})

test('add new message test', () => {

  const newStateUpdateMessage = dialogsPageReducer(initialState, updateNewMessageCreator('hello', '2'))
  const newStateAddMessage = dialogsPageReducer(newStateUpdateMessage, addNewMessageCreator('2'))

  expect(newStateAddMessage.dialogs[0].newMessageText).toBe('')
  expect(newStateAddMessage.dialogs[1].newMessageText).toBe('')
  expect(newStateAddMessage.messages['2'].length).toBe(3)
  expect(newStateAddMessage.messages['2'][2].id).toBeDefined()
  expect(newStateAddMessage.messages['2'][2].message).toBe('hello')
  expect(newStateAddMessage.messages['2'][2].isMine).toBe(true)
})