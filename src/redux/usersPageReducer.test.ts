import {followUser, setCurrentPage, setIsLoading, setUsers, unfollowUser, usersPageReducer} from "./usersPageReducer";
import {UsersPageType} from "../types/entities";

let initialState: UsersPageType

beforeEach(() => {
  initialState =
    {
      "items":
        [
          {
            "name": "Shubert",
            "id": 1,
            "photos": {
              "small": null,
              "large": null
            },
            "status": null,
            "followed": false
          },
          {
            "name": "Hacker",
            "id": 2,
            "photos": {
              "small": null,
              "large": null
            },
            "status": null,
            "followed": false
          }
        ],
      "totalCount": 30,
      "error": null,
      "defaultPhoto":
        {
          "small": '',
          "large": ''
        },
      "currentPage": 1,
      "pageSize": 10,
      "isLoading": true,
    }
})

test('follow user', () => {
  const newState = usersPageReducer(initialState, followUser(1))

  expect(newState.items[0].followed).toBe(true)
  expect(newState.items[1].followed).toBe(false)
})

test('unfollow user', () => {
  const newState = usersPageReducer(initialState, unfollowUser(2))

  expect(newState.items[0].followed).toBe(false)
  expect(newState.items[1].followed).toBe(false)
})

test('set users', () => {
  const newUsers = {
    ...initialState,
    "items":
      [
        {
          "name": "John",
          "id": 3,
          "photos": {
            "small": 'Johns photo',
            "large": null
          },
          "status": null,
          "followed": false
        },
        {
          "name": "Wick",
          "id": 4,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }
      ],
    "totalCount": 30,
    "error": null
  }
  const newState = usersPageReducer(initialState, setUsers(newUsers))

  expect(newState.items[0].id).toBe(3)
  expect(newState.items[0].photos.small).toBe('Johns photo')
  expect(newState.items[1].name).toBe("Wick")
  expect(newState.totalCount).toBe(30)
})

test('set current page', () => {
  const newState = usersPageReducer(initialState, setCurrentPage(6))

  expect(newState.currentPage).toBe(6)
})

test('set isLoading', () => {
  const newState = usersPageReducer(initialState, setIsLoading(false))

  expect(newState.isLoading).toBe(false)
})