import CreateEntry from "../components/CreateEntry";
import DisplayTable from "../components/DisplayTable";
import { Container } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { getData } from '../services/profile.service'
import { useEffect, useState } from "react";


export default function Home({profiles}) {
  const [profile, setProfile] = useState(profiles)

  let deleteProfile = (id) => setProfile(profile.filter(x => x.id !== id))
  let createProfile = (data) => setProfile([...profile, data])


  return (
    <Container maxW="1000px">
      <div>
        <br />
        <CreateEntry createProfile={createProfile} />
        <br />
        <DisplayTable profile={profile} deleteProfile={deleteProfile} />
      </div>
    </Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const profiles = await getData()

  return {
      props: {
          profiles
      }
  }
}