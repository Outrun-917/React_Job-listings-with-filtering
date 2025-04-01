import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from "./components/Title"
import Image from "./components/Image"

import Card from "./components/Card"
import ProfilePicture from "./components/ProfilePicture"
import CompanyName from "./components/CompanyName"
import JobTitle from "./components/JobTitle"
import ProfileInfo from "./components/ProfileInfo"

import Tag from "./components/Tag"
import Badge from "./components/Badge"
import JobDetails from "./components/JobDetails"

function App() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch("../data.json")
      const data = await res.json()

      setUserData(data)
    }

    getData()
  }, [])

  console.log(userData)


  const users = [
    {
      id: 1,
      name: "Jerome",
      picture: "https://randomuser.me/api/portraits/men/37.jpg"
    },
    {
      id: 2,
      name: "Max",
      picture: "https://randomuser.me/api/portraits/men/38.jpg"
    },
    {
      id: 3,
      name: "Karl",
      picture: "https://randomuser.me/api/portraits/men/39.jpg"
    },
    {
      id: 4,
      name: "Tim",
      picture: "https://randomuser.me/api/portraits/men/40.jpg"
    }
  ]

  return (
    <>
      {
        userData.map(user => (
          <Card key={user.id}>
            <ProfilePicture profilePicture={user.logo} name={user.company} />
            <CompanyName name={user.company} />
            {
              user.new && (
                <Badge content="new" type="primary" />
              )
            }
            {
              user.featured && (
                <Badge content="featured" />
              )
            }
            <JobTitle jobTitle={user.position} />
            {/* <ProfileInfo date={user.postedAt} workTime={user.contract} location={user.location} /> */}
            <ul>
              <li>
                <JobDetails content={user.postedAt} />
                -
                <JobDetails content={user.contract} />
                -
                <JobDetails content={user.location} />
              </li>
            </ul>
            {
              [...user.languages, ...user.tools].map(tag => (
                <li>
                  <Tag key={tag} name={tag} />
                </li>
              ))
            }
          </Card>
        ))
      }
    </>
  )
}

export default App
