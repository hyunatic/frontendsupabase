import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { Image, Button } from '@chakra-ui/react'
import { deleteData } from '../services/profile.service'


function DisplayTable({ profile, deleteProfile }) {

    const deleteEntry = async (id: string) => {
        deleteData(id)
        deleteProfile(id)
    }
    return (
        <div>
                <Table variant='simple'>
                    <TableCaption>Display of Profiles (Never do update function)</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Image</Th>
                            <Th>Nationality</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {profile.map(x => {
                            return (
                                <Tr key={x.id}>
                                    <Td>{x.Name}</Td>
                                    <Td><Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src={x.Picture}
                                        alt={x.Name}
                                    /></Td>
                                    <Td>{x.Nationality}</Td>
                                    <Td><Button onClick={() => deleteEntry(x.id)} colorScheme='red'>Delete</Button></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
        </div>
    )
}



export default DisplayTable