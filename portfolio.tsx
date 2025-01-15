import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "/components/ui/avatar"
import { Button } from "/components/ui/button"
import { ArrowRight } from 'lucide-react'

const resumeData = {
  name: "Priyanshu Singh",
  contact: {
    email: "priyaanshu128912@gmail.com",
    phone: "+91-7258993675",
    linkedin: "https://linkedin.com/in/priyanshu-singh",
    github: "https://github.com/priyanshusingh"
  },
  summary: "I am an aspiring **AI/ML Engineer** skilled in **Python**, **C++**, **TensorFlow**, and **SQL**. My projects include creating an **AI-powered NPC** with **Metahuman**, implementing **Image Segmentation with Mask R-CNN**, and developing **voice-driven interactive systems**. I aim to leverage advanced AI to enhance user experiences and drive innovation.",
  education: {
    degree: "Bachelor of Technology in AIML",
    university: "Symbiosis Institue of Technology",
    gpa: "7.2",
    expectedGraduation: "July 2027"
  },
  projects: [
    {
      title: "MetaHUMANS",
      description: "Developed a system to generate human-like avatars using deep learning techniques.",
      technologies: ["Python", "Unreal Engine", "Nvidia Omniverse"],
      videoUrl: "https://youtu.be/Vm5yx9FkFcw",
    },
    {
      title: "StudyMail Analyser",
      description: "Created an email analysis tool to categorize study materials based on subject.",
      technologies: ["Python", "OpenCV"],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
      title: "Sentinel AI - Fraud Detection",
      description: "Built a fraud detection system using machine learning algorithms.",
      technologies: ["Python", "Scikit-learn"],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    }
  ],
  hackathonAchievements: [
    {
      title: "Nature First Hackathon",
      description: "Developed a solution to address environmental issues using AI.",
      certificateUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Parul Hack Verse",
      description: "Created an AI-based chatbot for customer support.",
      certificateUrl: "https://via.placeholder.com/150"
    },
    {
      title: "ML Paradox Hackathon",
      description: "Built a predictive analytics model for financial forecasting.",
      certificateUrl: "https://via.placeholder.com/150"
    }
  ],
  additionalInfo: {
    skills: ["Python", "TensorFlow", "Deep Learning", "OpenCV", "C/C++", "SQL"],
    certifications: ["DSA in C/C++", "Hackerrank in SQL"],
    tools: ["Git", "GIthub", "Jupyter Notebook", "Visual Studio Code"]
  }
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('summary')

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{resumeData.name}</h1>
            <p className="text-lg text-gray-300">Aspiring AI/ML Engineer</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={() => handleSectionChange('summary')}>Summary</Button>
            <Button variant="outline" onClick={() => handleSectionChange('education')}>Education</Button>
            <Button variant="outline" onClick={() => handleSectionChange('projects')}>Projects</Button>
            <Button variant="outline" onClick={() => handleSectionChange('hackathonAchievements')}>Hackathon Achievements</Button>
            <Button variant="outline" onClick={() => handleSectionChange('additionalInfo')}>Additional Info</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {activeSection === 'summary' && (
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{resumeData.summary}</p>
              </CardContent>
            </Card>
          )}
          {activeSection === 'education' && (
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">{resumeData.education.degree}</p>
                <p>{resumeData.education.university}</p>
                <p>GPA: {resumeData.education.gpa}</p>
                <p>Expected Graduation: {resumeData.education.expectedGraduation}</p>
              </CardContent>
            </Card>
          )}
          {activeSection === 'projects' && (
            <div>
              {resumeData.projects.map((project, index) => (
                <Card key={index} className="mb-4">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <p>{project.description}</p>
                      <p className="text-gray-400">Technologies: {project.technologies.join(', ')}</p>
                    </div>
                    <div className="flex-1">
                      <iframe
                        width="100%"
                        height="315"
                        src={project.videoUrl}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {activeSection === 'hackathonAchievements' && (
            <div>
              {resumeData.hackathonAchievements.map((achievement, index) => (
                <Card key={index} className="mb-4">
                  <CardHeader>
                    <CardTitle>{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <p>{achievement.description}</p>
                    </div>
                    <div className="flex-1">
                      <img
                        src={achievement.certificateUrl}
                        alt={`${achievement.title} Certificate`}
                        className="rounded-lg w-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {activeSection === 'additionalInfo' && (
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Skills</h3>
                    <p>{resumeData.additionalInfo.skills.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Certifications</h3>
                    <p>{resumeData.additionalInfo.certifications.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Tools</h3>
                    <p>{resumeData.additionalInfo.tools.join(', ')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <p className="text-gray-300">Contact Information</p>
            <p>Email: {resumeData.contact.email}</p>
            <p>Phone: {resumeData.contact.phone}</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}