"use client";

import { useState } from "react";
import {
  Card,
  TextField,
  TextArea,
  InputGroup,
  Label,
  Button,
} from "@heroui/react";

import {
  Person,
  Envelope,
  Handset,
  Link as LinkIcon,
} from "@gravity-ui/icons";
import { submitJobApplication } from "@/lib/actions/application";

export default function JobApplyForm({ job, applicant }) {
  const [formData, setFormData] = useState({
    fullName: applicant.name,
    email: applicant.email,
    phone: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
        jobId: job?._id,
        jobTitle: job?.jobTitle,
        applicantId: applicant?.id,
        companyName: job.companyName,       
        ...formData,        
    }

    // console.log("Submitting application:", submissionData);
    
    const response = await submitJobApplication(submissionData);
    
    if (response.insertedId) {
        alert("Application submitted successfully!");
        setFormData({            
            phone: "",
            portfolio: "",
            coverLetter: "",
            resume: null,
        });
    } else {
        alert("Failed to submit application. Please try again.");
    }   


    
   
  };

  return (
    <Card className="max-w-2xl mx-auto mt-6">
      <Card.Header>
        <Card.Title>
          Apply for {job.jobTitle}
        </Card.Title>

        <Card.Description>
          {job.companyName}
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Full Name */}

          <TextField
            value={formData.fullName}
            onChange={(value) =>                
              handleChange(
                "fullName", value
              )
            }
          >
            <Label>Full Name</Label>

            <InputGroup>
              <InputGroup.Prefix>
                <Person />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="John Doe"
              />
            </InputGroup>
          </TextField>

          {/* Email */}

          <TextField
            value={formData.email}
            onChange={(value) =>
              handleChange(
                "email",
                value
              )
            }
          >
            <Label>Email</Label>

            <InputGroup>
              <InputGroup.Prefix>
                <Envelope />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="john@example.com"
                type="email"
              />
            </InputGroup>
          </TextField>

          {/* Phone */}

          <TextField
            value={formData.phone}
            onChange={(value) =>
              handleChange(
                "phone",
                value
              )
            }
          >
            <Label>Phone Number</Label>

            <InputGroup>
              <InputGroup.Prefix>
                <Handset />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="+1 234 567 890"
              />
            </InputGroup>
          </TextField>

          {/* Portfolio */}

          <TextField
            value={formData.portfolio}
            onChange={(value) =>
              handleChange(
                "portfolio",
                value
              )
            }
          >
            <Label>
              Portfolio / LinkedIn
            </Label>

            <InputGroup>
              <InputGroup.Prefix>
                <LinkIcon />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="https://..."
              />
            </InputGroup>
          </TextField>

          {/* Resume */}

          <div className="space-y-2">
            <Label>Resume / CV</Label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(value) =>
                handleChange(
                  "resume",
                  value
                )
              }
              className="block w-full rounded-lg border p-3 text-sm"
            />
          </div>

          {/* Cover Letter */}

          <TextArea
            value={formData.coverLetter}
            onChange={(e) =>
              handleChange(
                "coverLetter",
                e.target.value
              )
            }
          >
            <Label>Cover Letter</Label>
          </TextArea>

          <Button
            type="submit"
            color="primary"
            className="w-full"
          >
            Submit Application
          </Button>
        </form>
      </Card.Content>
    </Card>
  );
}