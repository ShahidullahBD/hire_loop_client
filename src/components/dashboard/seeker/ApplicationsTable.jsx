'use client'
import React from "react";
import { Table, Chip, Button } from "@heroui/react";
import { Eye, ExternalLink } from "lucide-react";

export default function ApplicationsTable({ applications = [] }) {
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content
                    aria-label="My Applications"
                    className="min-w-225"
                >
                    <Table.Header>
                        <Table.Column isRowHeader>
                            Job Title
                        </Table.Column>
                        <Table.Column>
                            Company
                        </Table.Column>
                        <Table.Column>
                            Applied On
                        </Table.Column> 
                        <Table.Column>
                            Status
                        </Table.Column>
                        <Table.Column>
                            Actions
                        </Table.Column>
                    </Table.Header>

                    <Table.Body emptyContent="No applications found.">
                        {applications.map((application, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{application.jobTitle}</Table.Cell>
                                <Table.Cell>{application.companyName}</Table.Cell>
                                <Table.Cell>
                                    {new Date(application.createdAt).toLocaleDateString()}
                                </Table.Cell> 
                                <Table.Cell>
                                    Active
                                </Table.Cell> 
                                <Table.Cell>
                                    <Button variant="danger">Cancel</Button>
                                </Table.Cell> 
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}