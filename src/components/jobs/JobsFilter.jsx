"use client";

import {
  Card,
  TextField,
  InputGroup,
  Label,
  Select,
  ListBox,
  Switch,
} from "@heroui/react";

import {
  Magnifier,
  Briefcase,
  Layers3Diagonal,
} from "@gravity-ui/icons";

export default function JobsFilter({
  filters,
  onFiltersChange,
  categories = [],
}) {
  const updateFilter = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <Card className="mb-6">
      {/* <Card.Header>
        <Card.Title>
          Find Your Next Job
        </Card.Title>

        <Card.Description>
          Search and filter available opportunities
        </Card.Description>
      </Card.Header> */}

      <Card.Content>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* Search */}

          <TextField
            value={filters.search}
            onChange={(e) =>
              updateFilter("search", e.target.value)
            }
          >
            <Label>Search Jobs</Label>

            <InputGroup>
              <InputGroup.Prefix>
                <Magnifier />
              </InputGroup.Prefix>

              <InputGroup.Input placeholder="Job title, company, location..." />
            </InputGroup>
          </TextField>

          {/* Job Type */}

          <Select
            selectedKey={filters.jobType}
            onSelectionChange={(key) =>
              updateFilter("jobType", key)
            }
          >
            <Label>Job Type</Label>

            <Select.Trigger>
              <Select.Value placeholder="Select job type" />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="all">
                  All Types
                </ListBox.Item>

                <ListBox.Item id="full-time">
                  Full Time
                </ListBox.Item>

                <ListBox.Item id="part-time">
                  Part Time
                </ListBox.Item>

                <ListBox.Item id="contract">
                  Contract
                </ListBox.Item>

                <ListBox.Item id="internship">
                  Internship
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Category */}

          <Select
            selectedKey={filters.category}
            onSelectionChange={(key) =>
              updateFilter("category", key)
            }
          >
            <Label>Category</Label>

            <Select.Trigger>
              <Select.Value placeholder="Select category" />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="all">
                  All Categories
                </ListBox.Item>

                {categories.map((category) => (
                  <ListBox.Item
                    key={category}
                    id={category}
                  >
                    {category}
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Remote */}

          <div className="flex items-center justify-start lg:justify-center">
            {/* <Switch
              isSelected={filters.remoteOnly}
              onValueChange={(value) =>
                updateFilter("remoteOnly", value)
              }
            >
              Remote Only
            </Switch> */}
            <Switch
              isSelected={filters.remoteOnly}
              onValueChange={(value) => {
                console.log("remoteOnly:", value);

                updateFilter("remoteOnly", value);
              }}
            >
              Remote Only
            </Switch>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}