"use client";

import {
    Card,
    Button,
    Chip,
    Avatar,
} from "@heroui/react";

import {
    Person,
    House,
    Rocket,
    Box,
} from "@gravity-ui/icons";

const applications = [
    {
        name: "Julianne Moore",
        role: "Senior Product Designer",
        date: "Oct 24, 2023",
        experience: "6 years",
        status: "Interviewing",
    },
    {
        name: "Robert Downey",
        role: "Backend Engineer",
        date: "Oct 23, 2023",
        experience: "4 years",
        status: "New",
    },
    {
        name: "Emma Stone",
        role: "Marketing Lead",
        date: "Oct 22, 2023",
        experience: "8 years",
        status: "Reviewing",
    },
    {
        name: "Chris Pratt",
        role: "Product Manager",
        date: "Oct 21, 2023",
        experience: "5 years",
        status: "Rejected",
    },
];

const companies = [
    {
        name: "Google Inc.",
        industry: "Technology",
        location: "Mountain View",
        jobs: 24,
        icon: House,
    },
    {
        name: "Meta Platforms",
        industry: "Social Media",
        location: "Menlo Park",
        jobs: 18,
        icon: Person,
    },
    {
        name: "Stripe",
        industry: "Fintech",
        location: "San Francisco",
        jobs: 12,
        icon: Box,
    },
    {
        name: "Tesla",
        industry: "Automotive",
        location: "Austin",
        jobs: 31,
        icon: Rocket,
    },
];

const getStatusColor = (status) => {
    switch (status) {
        case "Interviewing":
            return "success";
        case "Reviewing":
            return "warning";
        case "Rejected":
            return "danger";
        default:
            return "default";
    }
};

export default function RecentApplicationPage() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Applications */}
            <Card className="xl:col-span-2 bg-zinc-950 border border-zinc-800">

                {/* <Card.Header className="flex justify-between p-6">
                    <h2 className="text-xl font-semibold text-white">
                        Recent Applications
                    </h2>
                    <Button
                        variant="light"
                        size="sm"
                        className="text-zinc-400"
                    >
                        View all
                    </Button>
                </Card.Header> */}

                <Card.Content className="p-0">
                    <div className="flex items-center justify-between p-6">
                        <h2 className="text-xl font-semibold text-white">
                            Recent Applications
                        </h2>

                        <Button
                            variant="light"
                            size="sm"
                            className="text-zinc-400"
                        >
                            View all
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">

                            <thead>
                                <tr className="border-y border-zinc-800 text-left">
                                    <th className="px-6 py-4 text-sm text-zinc-400">
                                        Candidate Name
                                    </th>
                                    <th className="px-6 py-4 text-sm text-zinc-400">
                                        Role
                                    </th>
                                    <th className="px-6 py-4 text-sm text-zinc-400">
                                        Date Applied
                                    </th>
                                    <th className="px-6 py-4 text-sm text-zinc-400">
                                        Experience
                                    </th>
                                    <th className="px-6 py-4 text-sm text-zinc-400">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {applications.map((app, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-b border-zinc-900 hover:bg-zinc-900/50 transition"
                                    >
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    size="sm"
                                                    name={app.name}
                                                />
                                                <span className="text-white font-medium">
                                                    {app.name}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-5 text-zinc-400">
                                            {app.role}
                                        </td>

                                        <td className="px-6 py-5 text-zinc-400">
                                            {app.date}
                                        </td>

                                        <td className="px-6 py-5 text-zinc-400">
                                            {app.experience}
                                        </td>

                                        <td className="px-6 py-5">
                                            <Chip
                                                color={getStatusColor(app.status)}
                                                size="sm"
                                                variant="flat"
                                            >
                                                {app.status}
                                            </Chip>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </Card.Content>
                <Card.Footer className="px-6 pb-6 pt-2">
                    <Button
                        variant="bordered"
                        className="w-full border-zinc-700 text-white"
                    >
                        View All Companies
                    </Button>
                </Card.Footer>

            </Card>

            {/* Companies */}
            <Card className="bg-zinc-950 border border-zinc-800">

                {/* <Card.Header className="flex items-center justify-between px-6 py-5">
                    <h2 className="text-xl font-semibold text-white">
                        My Top Companies
                    </h2>

                    <Button
                        variant="light"
                        size="sm"
                        className="text-zinc-400"
                    >
                        View all
                    </Button>
                </Card.Header> */}

                <Card.Content className="px-6 pb-6">
                    <div className="flex items-center justify-between my-5">
                        <h2 className="text-xl font-semibold text-white">
                            My Top Companies
                        </h2>

                        <Button
                            variant="light"
                            size="sm"
                            className="text-zinc-400"
                        >
                            View all
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {companies.map((company, idx) => {
                            const Icon = company.icon;

                            return (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between rounded-xl border border-zinc-800 p-4 hover:bg-zinc-900 transition"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>

                                        <div>
                                            <h4 className="font-medium text-white">
                                                {company.name}
                                            </h4>

                                            <p className="text-xs text-zinc-500">
                                                {company.industry} • {company.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <h4 className="font-bold text-white">
                                            {company.jobs}
                                        </h4>

                                        <p className="text-[10px] uppercase text-zinc-500">
                                            Active Jobs
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </Card.Content>

                <Card.Footer className="px-6 pb-6 pt-2">
                    <Button
                        variant="bordered"
                        className="w-full border-zinc-700 text-white"
                    >
                        View All Companies
                    </Button>
                </Card.Footer>

            </Card>

        </div>
    );
}