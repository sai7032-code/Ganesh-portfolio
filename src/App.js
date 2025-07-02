import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import profileImg from "./ganesh_profile.jpg"; // Ensure this image is in src/

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-purple-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20 px-6 text-center animate-fade-in">
        <img
          src={profileImg}
          alt="Ganesh Kuna"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide animate-slide-up">Ganesh Kuna</h1>
        <p className="text-xl font-medium animate-slide-up">
          DevOps Engineer | AWS Certified | CI/CD | Kubernetes | Docker | Terraform
        </p>
        <a
          href="/Ganesh_Kuna_Resume.pdf"
          download
          className="inline-block mt-6 bg-white text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-purple-200 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>
      {/* Education Section */}
<section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🎓 Education</h2>
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        degree: "Bachelor of Science (B.Sc)",
        institute: "Arora Degree College, Karimnagar",
        result: "CGPA: 8.7"
      },
      {
        degree: "Intermediate (12th)",
        institute: "Sri Vikas Junior College",
        result: "Marks: 940 / 1000"
      },
      {
        degree: "SSC",
        institute: "ZPHS High School, Warangal",
        result: "GPA: 8.2"
      }
    ].map((edu, index) => (
      <div
        key={index}
        className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-lg transform transition duration-300 hover:scale-105"
      >
        <h3 className="text-xl font-semibold text-black mb-2">{edu.degree}</h3>
        <p className="text-gray-800 font-medium">{edu.institute}</p>
        <p className="text-purple-900 font-bold mt-1">{edu.result}</p>
      </div>
    ))}
  </div>
</section>


      {/* Skills Section */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🧠 Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Cloud Technologies",
              items: [
                "Amazon EC2", "IAM", "ECS", "ECR", "CloudWatch", "S3",
                "CloudFormation", "AWS Backup", "AWS CLI", "VPC"
              ]
            },
            {
              title: "CI/CD & Configuration",
              items: ["Jenkins", "GitHub Actions", "Git", "Maven", "Nexus", "Ansible", "Terraform"]
            },
            {
              title: "Containerization & Orchestration",
              items: ["Docker", "Dockerfile", "Kubernetes"]
            },
            {
              title: "Scripting & Monitoring",
              items: ["Shell Script", "CloudWatch Alarms"]
            },
            {
              title: "Version Control & OS",
              items: ["GitHub", "Linux", "Windows", "MacOS"]
            },
            {
              title: "Mobile Deployment",
              items: [
                "App Store & Play Store Publishing", "iOS Provisioning Profiles", "Android Keystores"
              ]
            }
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-black mb-3">{skill.title}:</h3>
              <ul className="list-disc pl-6 text-lg text-gray-800 space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-indigo-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">💼 Work Experience</h2>
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-black mb-2">
            DevOps Engineer – Devorks Solutions <span className="text-sm text-gray-600">(Feb 2023 – Present)</span>
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Implemented CI/CD using Jenkins, GitHub, Docker, ECS, and ECR on AWS.</li>
            <li>Triggered Jenkins builds on GitHub commits to create Docker images and deploy to ECS.</li>
            <li>Used AWS services like IAM, EC2, VPC, CloudFormation, CloudWatch, ECR, ECS, S3.</li>
            <li>Managed Jenkins jobs to build and deploy frontend/backend apps.</li>
            <li>Automated artifact upload to S3 and Git repo backup using shell scripts.</li>
            <li>Scheduled MySQL backups via AWS Backup and monitored apps with CloudWatch alarms.</li>
            <li>Integrated Jenkins pipelines with Nexus for automated publishing.</li>
          </ul>
        </div>
      </section>


      {/* Projects Section */}
<section className="bg-purple-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">🚀 Projects</h2>

  <div className="bg-white rounded-lg p-6 shadow hover:shadow-xl transform transition duration-500 hover:scale-105">
    <h3 className="text-xl font-semibold text-black mb-4">Spryple HR & Payroll – DevOps Implementation</h3>

    {/* DevOps Responsibilities */}
    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 animate-fade-in">
      <li>Implemented CI/CD processes using Jenkins, GitHub, Docker, ECS, and ECR on the AWS platform to enable end-to-end automation.</li>
      <li>Configured Jenkins to automatically trigger builds on code commits to GitHub, build Docker images, push them to Amazon ECR, and deploy them to Amazon ECS.</li>
      <li>Utilized various AWS services including IAM, EC2, CloudFormation, AWSCLI, VPC, ECS, and ECR.</li>
      <li>Created and maintained Jenkins pipeline jobs for both frontend and backend components to compile, build, and deploy applications.</li>
      <li>Automated the process of uploading build artifacts to Amazon S3 from Jenkins.</li>
      <li>Developed shell scripts to automate deployment and Git repository backup tasks.</li>
      <li>Used AWS Backup to schedule and manage regular backups of MySQL databases to Amazon.</li>
      <li>Configured Amazon Cloud Watch alarms for real-time monitoring of application performance.</li>
      <li>Integrated Jenkins pipelines with Nexus Repository Manager to automate artifact publishing and version control.</li>
    </ul>

    {/* Mobile App Deployment Responsibilities */}
    <div className="bg-purple-100 p-4 rounded-lg animate-zoom-in shadow-inner">
      <h4 className="text-lg font-bold text-purple-900 mb-3">📱 Mobile App Deployment</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Responsible for managing and publishing mobile app releases to the Google Play Store and Apple App Store for Spryple HR & Payroll software.</li>
        <li>Coordinated with the mobile development team to prepare release builds and ensure compliance with Play Store and App Store guidelines.</li>
        <li>Handled versioning, change logs, and rollout strategy for app updates.</li>
        <li>Managed certificates, provisioning profiles (iOS), and keystore files (Android) for secure and smooth deployments.</li>
        <li>Monitored and resolved deployment-related issues, ensuring minimal downtime and a seamless user experience.</li>
      </ul>
    </div>
  </div>
</section>


      {/* Certifications Section */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">📜 Certifications</h2>
        <div className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-black mb-2">
            AWS Certified Solutions Architect – Associate
          </h3>
          <p className="text-gray-800 mb-1">🆔 Certificate ID: <span className="font-bold">70dcf448f1ef45e0a19c2b1a8d7ab860</span></p>
          <p>
            🔗 <a
              href="https://aws.amazon.com/verification"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-500"
            >
              View Certification
            </a>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-purple-900 text-white p-8 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
        <p className="mb-2">📧 ganeshkuna18@gmail.com</p>
        <p>📞 +91 7032633842</p>
        <p>📍 Hyderabad, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/Devopshub123/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/ganesh-kuna-776636294" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:ganeshkuna18@gmail.com" className="hover:text-indigo-200 transition">
            <MdEmail size={30} />
          </a>
          <a href="tel:7032633842" className="hover:text-indigo-200 transition">
            <MdPhone size={30} />
          </a>
        </div>
      </section>

    </main>
  );
}
