import React, { useState } from 'react'
import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { createData } from '../services/profile.service'

function CreateEntry({createProfile}) {
    const [entry, setEntry] = useState({Name: "", Picture: "", Nationality: ""})

    let { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")

    let createEntry = () => {
        createData(entry)
        createProfile(entry)
        setEntry({Name: "", Picture: "", Nationality: ""})
    }
    
    return (
        <div>
            <Flex alignItems="center" justifyContent="center">
                <Flex direction="column" background={formBackground} p={12} rounded={6}>
                    <Heading mb={6}>Create New Entry</Heading>
                    <Input placeholder="Enter Name" value={entry.Name} onChange={(e) => setEntry({...entry, Name: e.target.value})} variant="filled" mb={3} type="text" />
                    <Input placeholder="Input Picture Link" value={entry.Picture} onChange={(e) => setEntry({...entry, Picture: e.target.value})} variant="filled" mb={3} type="text" />
                    <Input placeholder="Enter Nationality" value={entry.Nationality} onChange={(e) => setEntry({...entry, Nationality: e.target.value})} variant="filled" mb={3} type="text" />
                <Button onClick={createEntry} colorScheme="blue" mb={3}>Submit</Button>
                <Button onClick={toggleColorMode}>Dark Mode</Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default CreateEntry